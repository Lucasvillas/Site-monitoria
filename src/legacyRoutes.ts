export type LegacyPageDefinition = {
  fileName: string;
  path: string;
};

export const legacyPages: LegacyPageDefinition[] = [
  { fileName: 'index.html', path: '/' },
  { fileName: 'asa-norte.html', path: '/asa-norte' },
  {
    fileName: 'aulas-gravadas-fundamentos-ciencia-de-dados.html',
    path: '/aulas-gravadas-fundamentos-ciencia-de-dados',
  },
  {
    fileName: 'aulas-gravadas-machine-learning.html',
    path: '/aulas-gravadas-machine-learning',
  },
  { fileName: 'aulas-gravadas-sql.html', path: '/aulas-gravadas-sql' },
  { fileName: 'equipe.html', path: '/equipe' },
  { fileName: 'Inscrição-para-monitores.html', path: '/inscricao-para-monitores' },
  { fileName: 'oficina-blender.html', path: '/oficina-blender' },
  { fileName: 'oficina-Ciência-de-dados.html', path: '/oficina-ciencia-de-dados' },
  {
    fileName: 'oficina-fundamentos-ciencia-de-dados.html',
    path: '/oficina-fundamentos-ciencia-de-dados',
  },
  {
    fileName: 'oficina-fundamentos-computacao.html',
    path: '/oficina-fundamentos-computacao',
  },
  { fileName: 'oficina-linux.html', path: '/oficina-linux' },
  { fileName: 'oficina-Lógica.html', path: '/oficina-logica' },
  { fileName: 'oficina-machine-learning.html', path: '/oficina-machine-learning' },
  { fileName: 'oficina-pitaco.html', path: '/oficina-pitaco' },
  { fileName: 'oficina-redes.html', path: '/oficina-redes' },
  { fileName: 'oficina-sql.html', path: '/oficina-sql' },
  { fileName: 'oficina-web.html', path: '/oficina-web' },
  { fileName: 'pitaco.html', path: '/pitaco' },
];

const byFileName = new Map<string, string>();
const byPath = new Map<string, string>();

for (const page of legacyPages) {
  byFileName.set(page.fileName, page.path);
  byFileName.set(page.fileName.toLowerCase(), page.path);
  byPath.set(page.path, page.fileName);
}

const normalizeFileName = (input: string): string => {
  const cleaned = decodeURIComponent(input).replace(/^\.\//, '');
  return cleaned.toLowerCase();
};

export const getLegacyFileByPath = (path: string): string | undefined => {
  if (path === '/') {
    return 'index.html';
  }

  return byPath.get(path);
};

export const mapLegacyHrefToRoute = (href: string): string | null => {
  if (!href) {
    return null;
  }

  if (
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('javascript:')
  ) {
    return null;
  }

  const parsed = new URL(href, 'https://legacy.local');
  const fileName = parsed.pathname.split('/').pop() ?? '';
  const normalized = normalizeFileName(fileName);
  const route = byFileName.get(fileName) ?? byFileName.get(normalized);

  if (!route) {
    return null;
  }

  return `${route}${parsed.search}${parsed.hash}`;
};
