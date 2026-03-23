import { Header, Footer, WorkshopCard, Container, Section, Button } from '../components';

export function HomePage() {
  return (
    <div>
      <Header
        heroTitle="MONITORIA DE TI"
        heroSubtitle="Conectando alunos à tecnologia na prática"
      />

      <main className="main-content">
        {/* Campus Asa Norte Section */}
        <Section variant="dark">
          <div className="monitoriaInfo-grid">
            <div className="mago-spell-wrapper">
              <img src="/images/mago_spell.png" alt="Mago Spell" className="mago-spell" />
            </div>
            <div className="monitoria-info">
              <h2 className="monitoria-title">SOBRE A MONITORIA DE TI</h2>
              <p className="monitoria-description">
                Somos uma comunidade universitária focada no crescimento mútuo e no fortalecimento do setor
                tecnológico. Unimos monitores e alunos em um ecossistema que integra o saber acadêmico à prática
                de mercado, transformando desafios em aprendizado colaborativo e inovação técnica.
                <br />
                <br />
                Nossa missão é promover um estudo produtivo e equilibrado, oferecendo oficinas de base, projetos
                de alto impacto e apoio acadêmico estratégico. Através dessa troca, expandimos os horizontes dos
                estudantes, visando o desempenho de excelência e a construção de trajetórias profissionais de
                sucesso.
              </p>
              <Button href="/equipe">Conheça nossa equipe</Button>
            </div>
          </div>
        </Section>

        {/* Nossas Iniciativas Section */}
        <Section variant="light">
          <div className="campus-grid campus-grid-reverse">
            <div className="iniciativas-info">
              <h2 className="iniciativas-title">NOSSAS INICIATIVAS</h2>
              <div className="workshop-grid">
                <WorkshopCard
                  image="/images/mago oficina.png"
                  title="Oficinas"
                  description="Descubra o que ensinamos em nossas oficinas"
                  href="/asa-norte"
                />

                <WorkshopCard
                  image="/images/mago acidentando.png"
                  title="Projetos"
                  description="Descubra o que construímos em conjunto"
                  href="/pitaco"
                />

                <a
                  href="https://linktr.ee/monitoriaticeub?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnnfx3Zu7Ou7kIWeRVch6rimvJfqtpLbFXUdWIJH2XfRt1GGUal6TUg6VdpgI_aem_oU5c-2Aaix1uu6aS04kDqA"
                  className="workshop-card-link"
                >
                  <div className="workshop-card">
                    <img src="/images/mago working.png" alt="Apoio Acadêmico" className="workshop-image" />
                    <div className="workshop-info" style={{ backgroundColor: '#ffffff' }}>
                      <h3 className="cards-title">Apoio Acadêmico</h3>
                      <p className="card-schedule">Descubra como podemos te ajudar</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <section className="services-section">
          <Container>
            <h2 className="section-title">PERGUNTAS FREQUENTES</h2>
            <div className="monitoriaInfo-grid">
              <div className="monitoria-info">
                <h3>
                  O que vocês fazem na prática: é uma aula extra, um grupo de estudos ou vocês desenvolvem
                  softwares juntos?
                </h3>
                <br />
                <p className="monitoria-description">
                  Fazemos as três coisas! Temos as oficinas (onde você aprende tecnologias específicas na prática),
                  desenvolvemos softwares e hardwares reais para montar portfólio e o PITACO, onde estudamos e
                  produzimos resultados em comunidade.
                </p>

                <h3>
                  Qualquer aluno pode participar ou tem que passar por algum processo seletivo ou "prova" para
                  entrar?
                </h3>
                <br />
                <p className="monitoria-description">
                  Sim! As nossas atividades e oficinas são abertas para qualquer aluno que queira aprender. Já para
                  se tornar um monitor do grupo e ajudar na organização, geralmente abrimos uma seleção interna para
                  quem já está mais avançado ou demonstrou interesse nas atividades.
                </p>

                <h3>Tem algum custo para participar das atividades ou é tudo gratuito para os alunos?</h3>
                <br />
                <p className="monitoria-description">
                  É 100% gratuito! Somos um grupo feito por alunos para alunos dentro da universidade. Nosso foco é
                  o crescimento mútuo e fortalecer a comunidade de TI.
                </p>

                <h3>Onde e quando nos reunimos?</h3>
                <br />
                <p className="monitoria-description">
                  Não temos uma sala fixa, mas nossa comunidade é muito ativa online! Nossas oficinas presenciais
                  acontecem nas salas e laboratórios do próprio CEUB. Para não perder os horários e locais de cada
                  encontro, entre em nossos grupos e comunidades online!
                </p>
              </div>
              <div className="mago-spell-wrapper">
                <img src="/images/mago com duvida.png" alt="Mago Dúvida" className="mago-duv" />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
