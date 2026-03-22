import { Header, Footer, Container } from '../components';

export function PitacoPage() {
  return (
    <div>
      <Header heroTitle="PITACO" heroSubtitle="Construindo em conjunto" />

      <main className="main-content">
        <section className="campus-section pitaco-dark">
          <Container>
            <div className="monitoriaInfo-grid">
              <div className="pitaco-wrapper">
                <img src="/images/pitaco.jpg" alt="Pitaco" className="pitaco-img" />
              </div>
              <div className="monitoria-info">
                <h2 className="monitoria-title">O QUE E O PITACO?</h2>
                <p className="monitoria-description">
                  Pitaco e um espaco de aprendizado vivo, horizontal e colaborativo, onde todas as pessoas
                  participam da construcao de conhecimento e projetos reais. A cada ciclo, criamos oportunidades
                  para experimentar na pratica, aprender em conjunto e transformar ideias em solucoes concretas.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="campus-section campus-light">
          <Container>
            <div className="monitoriaInfo-grid">
              <div className="mago-spell-wrapper">
                <img src="/images/mago theres no time.png" alt="Objetivo do Pitaco" className="mago-duv" />
              </div>
              <div className="monitoria-info">
                <h2 className="monitoria-title">QUAL O OBJETIVO DO PITACO</h2>
                <p className="monitoria-description">
                  Construir uma comunidade de pessoas interessadas em tecnologia, com espaco aberto para troca de
                  experiencias, compartilhamento de conhecimento e desenvolvimento colaborativo de projetos.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="services-section">
          <Container>
            <h2 className="section-title">COMO PARTICIPAR?</h2>
            <div className="monitoriaInfo-grid">
              <div className="monitoria-info">
                <p className="monitoria-description">
                  Os encontros e comunicados do PITACO sao organizados pela comunidade no WhatsApp. Entre no grupo
                  para acompanhar datas, horarios e atividades.
                </p>
                <a
                  className="btn-primary"
                  href="https://chat.whatsapp.com/E7Ip1usVgay3cxtX2UZ7rt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fique por dentro
                </a>
              </div>
              <div className="mago-spell-wrapper">
                <img src="/images/mago com duvida.png" alt="Como participar" className="mago-duv" />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
