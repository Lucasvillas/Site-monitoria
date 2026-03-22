import { Header, Footer, MonitorCard, Container } from '../components';
import { MONITORES_ATUAIS, EX_MONITORES } from '../data/monitors';

export function EquipePage() {
  return (
    <div>
      <Header heroTitle="Equipe de Monitores" />

      <main className="main-content">
        {/* Monitores Atuais */}
        <section className="services-section">
          <Container>
            <h2 className="section-title">Conheça nossa equipe</h2>
            <div className="services-grid">
              {MONITORES_ATUAIS.map((monitor) => (
                <MonitorCard
                  key={monitor.id}
                  name={monitor.name}
                  role={monitor.role}
                  image={monitor.image}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Ex-Monitores */}
        <section className="services-section">
          <Container>
            <h2 className="section-title">Ex-Membros da Monitoria</h2>
            <div className="services-grid">
              {EX_MONITORES.map((monitor) => (
                <MonitorCard
                  key={monitor.id}
                  name={monitor.name}
                  role={monitor.role}
                  image={monitor.image}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
