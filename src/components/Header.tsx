import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

export function Header({ heroTitle, heroSubtitle }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isPitaco = location.pathname === '/pitaco';

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <header className="header">
      <div className={isPitaco ? 'header-pitaco' : 'header-overlay'}>
        <div className="container">
          <div className="logo-container">
            <img src="/images/ceub-logo.png" alt="CEUB Logo" className="logo" />
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a
                  href="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '/')}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/asa-norte"
                  className={`nav-link ${isActive('/asa-norte') ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '/asa-norte')}
                >
                  Ver Oficinas
                </a>
              </li>
              <li>
                <a
                  href="/pitaco"
                  className={`nav-link ${isActive('/pitaco') ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '/pitaco')}
                >
                  PITACO
                </a>
              </li>
              <li>
                <a
                  href="/equipe"
                  className={`nav-link ${isActive('/equipe') ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, '/equipe')}
                >
                  Equipe
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {heroTitle && (
          <div className="hero-content">
            <h1 className="hero-title">{heroTitle}</h1>
            {heroSubtitle && <p className="hero-subtitle">{heroSubtitle}</p>}
          </div>
        )}
      </div>
    </header>
  );
}
