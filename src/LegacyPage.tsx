import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mapLegacyHrefToRoute } from './legacyRoutes';

type PreparedHtml = {
  html: string;
  externalScripts: string[];
  inlineScripts: string[];
};

const WINDOW_LOCATION_REGEX = /window\.location\.href\s*=\s*['\"]([^'\"]+)['\"]/;
const WINDOW_OPEN_REGEX = /window\.open\(\s*['\"]([^'\"]+)['\"]/;

const fixAssetPath = (value: string): string => {
  if (!value || value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/') || value.startsWith('data:')) {
    return value;
  }

  return value.startsWith('images/') ? `/${value}` : value;
};

const prepareLegacyHtml = (rawHtml: string): PreparedHtml => {
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
  const body = doc.body;

  const externalScripts = [
    ...Array.from(doc.head.querySelectorAll('script[src]')).map((script) => script.getAttribute('src') ?? ''),
    ...Array.from(body.querySelectorAll('script[src]')).map((script) => script.getAttribute('src') ?? ''),
  ].filter(Boolean);

  const inlineScripts = [
    ...Array.from(doc.head.querySelectorAll('script:not([src])')).map((script) => script.textContent ?? ''),
    ...Array.from(body.querySelectorAll('script:not([src])')).map((script) => script.textContent ?? ''),
  ].filter(Boolean);

  doc.querySelectorAll('script').forEach((script) => script.remove());

  body.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href') ?? '';
    const route = mapLegacyHrefToRoute(href);

    if (route) {
      anchor.setAttribute('href', route);
      anchor.setAttribute('data-internal-link', 'true');
    }
  });

  body.querySelectorAll('button[onclick]').forEach((button) => {
    const onClick = button.getAttribute('onclick') ?? '';
    const navMatch = onClick.match(WINDOW_LOCATION_REGEX);
    const openMatch = onClick.match(WINDOW_OPEN_REGEX);

    if (navMatch?.[1]) {
      const route = mapLegacyHrefToRoute(navMatch[1]);
      if (route) {
        button.setAttribute('data-nav-to', route);
        button.removeAttribute('onclick');
      }
      return;
    }

    if (openMatch?.[1]) {
      button.setAttribute('data-open-url', openMatch[1]);
      button.removeAttribute('onclick');
    }
  });

  body.querySelectorAll('img[src]').forEach((img) => {
    const src = img.getAttribute('src') ?? '';
    img.setAttribute('src', fixAssetPath(src));
  });

  body.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href') ?? '';
    anchor.setAttribute('href', fixAssetPath(href));
  });

  return {
    html: body.innerHTML,
    externalScripts,
    inlineScripts,
  };
};

type LegacyPageProps = {
  fileName: string;
};

export default function LegacyPage({ fileName }: LegacyPageProps) {
  const [html, setHtml] = useState<string>('');
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const prepared = useMemo(() => prepareLegacyHtml(html), [html]);

  useEffect(() => {
    let cancelled = false;

    const loadLegacyPage = async () => {
      try {
        const response = await fetch(`/legacy/${encodeURIComponent(fileName)}`);
        if (!response.ok) {
          throw new Error(`Falha ao carregar página legada: ${fileName}`);
        }

        const rawHtml = await response.text();
        if (!cancelled) {
          setHtml(rawHtml);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setHtml('<main class="main-content"><section class="services-section"><div class="container"><h2 class="section-title">Página indisponível</h2></div></section></main>');
        }
      }
    };

    void loadLegacyPage();

    return () => {
      cancelled = true;
    };
  }, [fileName]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const cleanups: Array<() => void> = [];

    const internalLinks: HTMLAnchorElement[] = Array.from(
      container.querySelectorAll('a[data-internal-link="true"]')
    );
    for (const anchor of internalLinks) {
      const handler = (event: MouseEvent) => {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          navigate(href);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      anchor.addEventListener('click', handler);
      cleanups.push(() => anchor.removeEventListener('click', handler));
    }

    const navButtons: HTMLButtonElement[] = Array.from(
      container.querySelectorAll('button[data-nav-to]')
    );
    for (const button of navButtons) {
      const handler = () => {
        const href = button.getAttribute('data-nav-to');
        if (href) {
          navigate(href);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      button.addEventListener('click', handler);
      cleanups.push(() => button.removeEventListener('click', handler));
    }

    const openButtons: HTMLButtonElement[] = Array.from(
      container.querySelectorAll('button[data-open-url]')
    );
    for (const button of openButtons) {
      const handler = () => {
        const targetUrl = button.getAttribute('data-open-url');
        if (targetUrl) {
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
      };

      button.addEventListener('click', handler);
      cleanups.push(() => button.removeEventListener('click', handler));
    }

    return () => {
      for (const cleanup of cleanups) {
        cleanup();
      }
    };
  }, [prepared.html, navigate]);

  useEffect(() => {
    let disposed = false;
    const appendedScripts: HTMLScriptElement[] = [];

    const runScripts = async () => {
      for (const src of prepared.externalScripts) {
        if (disposed || src === 'script.js') {
          continue;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
        appendedScripts.push(script);

        await new Promise<void>((resolve) => {
          script.onload = () => resolve();
          script.onerror = () => resolve();
        });
      }

      for (const scriptContent of prepared.inlineScripts) {
        if (disposed) {
          break;
        }

        try {
          // Script legado precisa de escopo global para manter o comportamento original.
          new Function(scriptContent)();
        } catch (error) {
          console.error('Erro ao executar script legado:', error);
        }
      }

      if (!disposed) {
        document.dispatchEvent(new Event('DOMContentLoaded'));
      }
    };

    void runScripts();

    return () => {
      disposed = true;
      for (const script of appendedScripts) {
        script.remove();
      }
    };
  }, [prepared.externalScripts, prepared.inlineScripts]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: prepared.html }} />;
}
