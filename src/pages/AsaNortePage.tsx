import { Header, Footer, Container } from '../components';
import { CalendarGrid } from '../components/CalendarGrid';
import { CICLOS } from '../data/ciclos';
import { useState } from 'react';

interface WorksheetData {
  nome: string;
  dias?: string;
  hora?: string;
  formato?: 'Presencial' | 'Online';
}

export function AsaNortePage() {
  const [expandedCyclo, setExpandedCyclo] = useState<string>('ciclo-1');

  const toggleAccordion = (ciclId: string) => {
    setExpandedCyclo(expandedCyclo === ciclId ? '' : ciclId);
  };

  const renderWorksheet = (worksheet: WorksheetData) => {
    const badgeDia = worksheet.dias
      ? `<span class="badge badge-dia" style="display: inline-flex">📅 ${worksheet.dias}</span>`
      : '';
    const badgeHora = worksheet.hora
      ? `<span class="badge badge-hora" style="display: inline-flex">⏰ ${worksheet.hora}</span>`
      : '';


    return (
      <div key={worksheet.nome} className="oficina-card">
        <span className="oficina-nome">{worksheet.nome}</span>
        <div className="oficina-detalhes" style={{ gap: '8px' }}>
          {badgeDia && <span className="badge badge-dia">📅 {worksheet.dias}</span>}
          {badgeHora && <span className="badge badge-hora">⏰ {worksheet.hora}</span>}
          {worksheet.formato && (
            <span
              className={`badge badge-formato ${worksheet.formato.toLowerCase()}`}
              style={{ fontWeight: 'bold' }}
            >
              {worksheet.formato}
            </span>
          )}
          {!worksheet.dias && !worksheet.hora && (
            <span className="badge badge-indefinido">A definir</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header heroTitle="OFICINAS" heroSubtitle="Oficinas Ativas - Monitoria dos Cursos de TI" />

      <main className="main-content">
        {/* Calendário Visual Section */}
        <section className="campus-section campus-light">
          <Container>
            <h2 className="section-title">Calendário Visual</h2>
            <CalendarGrid />
          </Container>
        </section>

        {/* Calendário Section */}
        <section className="campus-section campus-light">
          <Container>
            <h2 className="section-title">Calendário de Oficinas</h2>
            <div className="legenda-grid">
              {CICLOS.map((ciclo) => (
                <div
                  key={ciclo.id}
                  className="bloco-ciclo"
                  style={{ borderTopColor: ciclo.corBorda }}
                  onClick={() => toggleAccordion(ciclo.id)}
                >
                  <div className="accordion-header">
                    <h3 style={{ color: ciclo.corBorda, margin: 0, cursor: 'pointer' }}>
                      {ciclo.nome}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.8em',
                        transition: 'transform 0.2s',
                        transform:
                          expandedCyclo === ciclo.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      ▼
                    </span>
                  </div>
                  {expandedCyclo === ciclo.id && (
                    <div className="lista-oficinas">
                      {ciclo.oficinas.map((worksheet, idx) => (
                        <div key={idx}>{renderWorksheet(worksheet)}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Oficinas Cards Section */}
        <section className="campus-section campus-light">
          <Container>
            <h2 className="section-title">Oficinas Disponíveis no Campus Asa Norte</h2>
            <div className="workshop-grid">
              {/* Blender */}
              <a href="/oficina-blender" className="workshop-card-link">
                <div className="workshop-card">
                  <img src="/images/monitoriaBlender.png" alt="Blender" className="workshop-image" />
                  <div className="workshop-info" style={{ backgroundColor: '#ddd1ff' }}>
                    <h3 className="workshop-title">
                      Criação de <br /> Personagens 3D
                    </h3>
                    <p className="workshop-schedule">Segunda, Quarta e Sexta: 11h às 13h</p>
                    <button className="btn-primary" type="button">
                      Clique para saber mais
                    </button>
                  </div>
                </div>
              </a>

              {/* Java/Lógica */}
              <a href="/oficina-logica" className="workshop-card-link">
                <div className="workshop-card">
                  <img src="/images/mago redes.png" alt="Java" className="workshop-image" />
                  <div className="workshop-info" style={{ backgroundColor: '#ddd1ff' }}>
                    <h3 className="workshop-title">Oficina de Java</h3>
                    <p className="workshop-schedule">
                      Segunda, Terça e Quinta: 11h às 13h <br />
                      Segunda, Quarta e Sexta: 17h às 19h
                    </p>
                    <button className="btn-primary" type="button">
                      Clique para saber mais
                    </button>
                  </div>
                </div>
              </a>

              {/* Web */}
              <a href="/oficina-web" className="workshop-card-link">
                <div className="workshop-card">
                  <img src="/images/magoWeb.png" alt="Web" className="workshop-image" />
                  <div className="workshop-info" style={{ backgroundColor: '#ddd1ff' }}>
                    <h3 className="workshop-title">Oficina de Web</h3>
                    <p className="workshop-schedule">Quarta e Sexta: 11h às 13h</p>
                    <button className="btn-primary" type="button">
                      Clique para saber mais
                    </button>
                  </div>
                </div>
              </a>

              {/* Linux */}
              <a href="/oficina-linux" className="workshop-card-link">
                <div className="workshop-card">
                  <img src="/images/magoLinux.png" alt="Linux" className="workshop-image" />
                  <div className="workshop-info" style={{ backgroundColor: '#ddd1ff' }}>
                    <h3 className="workshop-title">Oficina de Linux</h3>
                    <p className="workshop-schedule">Terça e Quinta: 17h às 19h</p>
                    <button className="btn-primary" type="button">
                      Clique para saber mais
                    </button>
                  </div>
                </div>
              </a>

              {/* Ciência de Dados */}
              <a href="/oficina-ciencia-de-dados" className="workshop-card-link">
                <div className="workshop-card">
                  <img src="/images/mago fund.png" alt="Ciência de Dados" className="workshop-image" />
                  <div className="workshop-info" style={{ backgroundColor: '#ddd1ff' }}>
                    <h3 className="workshop-title">Ciência de Dados</h3>
                    <p className="workshop-schedule">Segunda, Terça e Quinta: 17h às 19h</p>
                    <button className="btn-primary" type="button">
                      Clique para saber mais
                    </button>
                  </div>
                </div>
              </a>

              {/* Machine Learning */}
              <a href="/oficina-machine-learning" className="workshop-card-link">
                <div className="workshop-card">
                  <img src="/images/mago levitando.png" alt="Machine Learning" className="workshop-image" />
                  <div className="workshop-info" style={{ backgroundColor: '#ddd1ff' }}>
                    <h3 className="workshop-title">Machine Learning</h3>
                    <p className="workshop-schedule">Segundas e Quartas: 17h às 19h</p>
                    <button className="btn-primary" type="button">
                      Clique para saber mais
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
