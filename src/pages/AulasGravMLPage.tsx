import { Header, Footer } from '../components';
import { PlaylistPlayer } from '../components/PlaylistPlayer';

const VIDEOS = [
  {
    id: 1,
    title: 'Introdução ao Pandas e Manipulação de Dados',
    date: '22 de Outubro, 2025',
    duration: '01 hora e 30 minutos',
    description:
      'Nesta aula, exploramos os conceitos fundamentais de Pandas, incluindo manipulação de DataFrames, limpeza de dados e visualização.',
    url: 'https://streamyard.com/e/7zibd8w6r5xc',
    tags: ['Pandas', 'DataFrames', 'Analise de Dados'],
    available: true,
  },
  {
    id: 2,
    title: 'Analise exploratória de dados e Modelos de Regressão',
    date: '27 de Outubro, 2025',
    duration: '01 hora e 30 minutos',
    description:
      'Abordamos técnicas de análise exploratória de dados (EDA) e implementamos modelos de regressão linear e logística usando Scikit-Learn.',
    url: 'https://streamyard.com/e/t2zn5qxj9see',
    tags: ['Regressão', 'Modelos', 'Python'],
    available: true,
  },
  {
    id: 3,
    title: 'Regressões e Classificações lineares com Scikit-Learn Notebook Pratico',
    date: '29 de Outubro, 2025',
    duration: '01 hora e 30 minutos',
    description:
      'Nesta aula, vimos do zero como implementar regressões e classificações lineares utilizando a biblioteca Scikit-Learn em Python. Também abordamos multicolinearidade e como corrigir esses problemas.',
    url: 'https://streamyard.com/e/y2d57gucgkrg',
    tags: ['Regressão Linear', 'Regressão Logística', 'Scikit-Learn'],
    available: true,
  },
  {
    id: 4,
    title: 'Pré-processamento de dados e Feature Engineering',
    date: '03 de Novembro, 2025',
    duration: '50 minutos',
    description:
      'Nesta aula, discutimos técnicas de pré-processamento de dados, incluindo normalização, padronização e engenharia de características para melhorar o desempenho dos modelos de machine learning.',
    url: 'https://drive.google.com/file/d/18bIsw0ygXtxkBlwf4uQKKGHE5U1ESh0y/preview',
    tags: ['Pré-processamento', 'Feature Engineering', 'Machine Learning'],
    available: true,
  },
  {
    id: 5,
    title: 'Árvores de Decisão e Modelos de Ensemble (Boosting e Bagging)',
    date: '05 de Novembro, 2025',
    duration: '35 minutos',
    description:
      'Nesta aula, abordamos o conceito de árvores de decisão e como elas podem ser utilizadas em problemas de classificação e regressão. Também discutimos técnicas de ensemble, como boosting e bagging, para melhorar o desempenho dos modelos.',
    url: 'https://streamyard.com/e/y2f59cpuq9y2',
    tags: ['Árvores de Decisão', 'Ensemble', 'Machine Learning'],
    available: true,
  },
  {
    id: 6,
    title: 'Tem que ver',
    date: '31 de Outubro, 2024',
    duration: '55 minutos',
    description: '',
    url: 'https://streamyard.com/e/7zibd8w6r5xc',
    tags: [],
    available: false,
  },
  {
    id: 7,
    title: 'Tem que ver',
    date: '05 de Novembro, 2024',
    duration: '60 minutos',
    description: '',
    url: 'https://streamyard.com/e/7zibd8w6r5xc',
    tags: [],
    available: false,
  },
  {
    id: 8,
    title: 'Tem que ver',
    date: '07 de Novembro, 2024',
    duration: '70 minutos',
    description: '',
    url: 'https://streamyard.com/e/7zibd8w6r5xc',
    tags: [],
    available: false,
  },
];

export function AulasGravMLPage() {
  return (
    <div>
      <Header heroTitle="Aulas Gravadas" heroSubtitle="Machine Learning - Campus Asa Norte" />

      <main className="main-content">
        <div className="container">
          <div className="header-buttons">
            <a
              href="https://classroom.google.com/c/ODEzMjI5MTcxMzg3?cjc=3kmaeje6"
              target="_blank"
              rel="noopener noreferrer"
              className="classroom-btn"
            >
              <span className="social-icon" aria-hidden="true">
                <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor" role="img">
                  <path d="M5 2h10l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8 2H7v14h10V6h-4z" />
                </svg>
              </span>
              <span>Classroom</span>
            </a>
            <a
              href="/"
              className="classroom-btn classroom-btn-secondary"
            >
              Início
            </a>
          </div>

          <PlaylistPlayer
            videos={VIDEOS}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
