export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Centro Universitário de Brasília – CEUB</h3>
            <p className="footer-subtitle">Monitoria dos Cursos de TI</p>
          </div>
          <div className="footer-contact">
            <h4 className="footer-heading">Contato</h4>
            <p className="footer-text">
              <span className="contact-icon">📧</span>
              <a href="mailto:monitoriaticeub@gmail.com" className="footer-link">
                monitoriaticeub@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-social">
            <h4 className="footer-heading">Redes Sociais</h4>
            <div className="social-links">
              <a href="https://discord.gg/my638p3hJB" className="social-link" aria-label="Discord">
                <span className="social-icon" aria-hidden="true">
                  <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" role="img">
                    <path d="M20.32 4.37a19.79 19.79 0 0 0-4.93-1.54.07.07 0 0 0-.07.03c-.21.38-.44.88-.6 1.27a18.27 18.27 0 0 0-5.44 0 12.64 12.64 0 0 0-.61-1.27.08.08 0 0 0-.07-.03A19.74 19.74 0 0 0 3.68 4.37a.07.07 0 0 0-.03.03C.56 8.95-.27 13.38.14 17.75a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.95 3.01.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.22-2.01a.08.08 0 0 0-.04-.11 13.16 13.16 0 0 1-1.87-.89.08.08 0 0 1-.01-.13c.13-.1.26-.2.38-.31a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08.01c.12.11.25.21.38.31a.08.08 0 0 1-.01.13c-.6.35-1.23.65-1.87.89a.08.08 0 0 0-.04.11c.35.71.76 1.38 1.22 2.01a.08.08 0 0 0 .09.03 19.83 19.83 0 0 0 5.95-3.01.07.07 0 0 0 .03-.05c.49-5.06-.82-9.45-3.51-13.35a.06.06 0 0 0-.03-.03ZM8.02 15.08c-1.18 0-2.15-1.08-2.15-2.4s.95-2.4 2.15-2.4c1.21 0 2.17 1.09 2.15 2.4 0 1.32-.95 2.4-2.15 2.4Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4s.95-2.4 2.15-2.4c1.21 0 2.17 1.09 2.15 2.4 0 1.32-.94 2.4-2.15 2.4Z" />
                  </svg>
                </span>
                <span>Discord</span>
              </a>
              <a href="https://www.instagram.com/monitoriatech?igsh=aHRmdGt6c2xybWZk" className="social-link" aria-label="Instagram">
                <span className="social-icon" aria-hidden="true">
                  <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" role="img">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm-4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.5-.87a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24Z" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
              <a href="https://chat.whatsapp.com/GXf5ZdnoMV9BIU77Df8L3F" className="social-link" aria-label="Whatsapp">
                <span className="social-icon" aria-hidden="true">
                  <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" role="img">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.09.54 4.13 1.57 5.94L0 24l6.34-1.66a11.88 11.88 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.07 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.37a9.88 9.88 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.91a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.44 9.9-9.89 9.9Zm5.42-7.42c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.66.15-.19.3-.76.98-.92 1.18-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.39-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.47.13-.62.14-.14.3-.37.45-.56.15-.18.2-.31.3-.51.1-.2.05-.37-.02-.52-.08-.15-.66-1.58-.9-2.16-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.18 3.01.15.2 2.04 3.12 4.93 4.37.69.3 1.23.48 1.66.61.7.22 1.34.19 1.85.11.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Monitoria de TI - CEUB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
