import { Header, Footer, Container, Button } from '../components';

interface WorkshopPageProps {
  title: string;
  subtitle: string;
  image: string;
  schedule: string;
  about: string;
  learnings: string[];
  target: string[];
  playlistLink?: string;
  monitors?: Array<{ name: string; role: string; image: string }>;
}

export function WorkshopPage({
  title,
  subtitle,
  image,
  schedule,
  about,
  learnings,
  target,
  playlistLink,
  monitors,
}: WorkshopPageProps) {
  return (
    <div>
      <Header heroTitle={title} heroSubtitle={subtitle} />

      <main className="main-content">
        <section className="workshop-detail-section campus-light">
          <Container>
            <div className="workshop-header">
              <img src={image} alt={title} className="workshop-detail-image" />
              <div className="workshop-header-info">
                <h2 className="workshop-detail-title">{title}</h2>
                <p className="workshop-detail-campus">Campus: Asa Norte</p>
                <p className="workshop-detail-schedule">Dias e Horários: {schedule}</p>
                <Button href="https://forms.gle/ryjrwRf5SV5NLfPy5">Inscreva-se Agora</Button>
                {playlistLink && <Button href={playlistLink}>Playlist de Aulas</Button>}
              </div>
            </div>

            <div className="workshop-description-block">
              <h3 className="section-subtitle">Sobre a Oficina</h3>
              <p>{about}</p>

              {learnings.length > 0 && (
                <>
                  <h4 style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>O que você vai aprender:</h4>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    {learnings.map((learning, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <b>{learning.split(':')[0]}:</b> {learning.split(':')[1]}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {target.length > 0 && (
                <>
                  <h4 style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>Para quem é esta oficina:</h4>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    {target.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <p style={{ marginTop: '1.5rem' }}>
                Preencha o formulário de inscrição para garantir sua vaga. <b>Vagas limitadas.</b>
              </p>
            </div>

            {monitors && monitors.length > 0 && (
              <div className="monitors-section">
                <h3 className="section-subtitle">Monitores Responsáveis</h3>
                <div className="monitors-grid">
                  {monitors.map((monitor, idx) => (
                    <div key={idx} className="monitor-card">
                      <img src={monitor.image} alt={monitor.name} className="monitor-photo" />
                      <h4 className="monitor-name">{monitor.name}</h4>
                      <p className="monitor-description">{monitor.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
