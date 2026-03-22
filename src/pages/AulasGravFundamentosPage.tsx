import { Header, Footer } from '../components';
import { PlaylistPlayer } from '../components/PlaylistPlayer';

const VIDEOS = [
  {
    id: 1,
    title: 'Introdução ao Python',
    date: '02 de Março, 2026',
    duration: '02 horas',
    description:
      'Aprendemos o básico da linguagem Python como variáveis, operadores aritméticos, tipos de variáveis e como utilizar o git/github',
    url: 'https://www.youtube.com/embed/XVUugYbc_Lo?si=SNgCwVQhf9qk1XDP',
    tags: ['PYTHON', 'CD', 'DATA TYPES', 'GIT', 'GITHUB'],
    available: true,
  },
  {
    id: 2,
    title: 'Condicionais, Operadores Booleanos e Relacionais',
    date: '03 de Março, 2026',
    duration: '02 horas',
    description:
      'Aprendemos sobre operadores booleanos (AND, OR, NOT), relacionais (==, <, >, <=, >=, !=) e estruturas condicionais (If, Elif, Else). Além disso, realizamos a preparação do ambiente de desenvolvimento com VsCode e Git/Github',
    url: 'https://www.youtube.com/embed/YLDpqX3imJo?si=d_UT5ed9DE44h4jX',
    tags: ['PYTHON', 'CD', 'IDE', 'VSCODE', 'GITHUB', 'IF/ELSE', 'BOOLEANOS'],
    available: true,
  },
  {
    id: 3,
    title: 'Listas e Laços de Repetição',
    date: '05 de Março, 2026',
    duration: '01 hora e 20 minutos',
    description:
      'Aprendemos sobre listas e laços de repetição (FOR e WHILE). Além disso, realizamos toda a execução no ambiente VsCode e Git/Github',
    url: 'https://www.youtube.com/embed/K4YNXVVB26k?si=reXzhlj8-1j_IAZ5',
    tags: ['PYTHON', 'CD', 'IDE', 'VSCODE', 'GITHUB', 'FOR', 'WHILE', 'LISTAS'],
    available: true,
  },
  {
    id: 4,
    title: 'Funções e Escopo de Variáveis',
    date: '09 de Março, 2026',
    duration: '01 hora e 30 minutos',
    description:
      'Aprendemos sobre funções, escopo de variáveis, endereços de memória e como o nosso computador enxerga tudo isso.',
    url: 'https://www.youtube.com/embed/K4A_H8y29EY?si=7hzrGD-r6qJTD8PF',
    tags: ['PYTHON', 'CD', 'IDE', 'VSCODE', 'GITHUB', 'FUNÇÕES', 'ESCOPO', 'VARIÁVEIS', 'MEMÓRIA'],
    available: true,
  },
  {
    id: 5,
    title: 'Funções Anônimas, List Comprehension e dicionários',
    date: '10 de Março, 2026',
    duration: '01 hora',
    description:
      'Aprendemos sobre as funções de listas e dicionários, além de estruturas de dados do python como list comprehension e lambda',
    url: 'https://www.youtube.com/embed/fEM1FhNGMsc?si=4I5vl14BjQ3hkXbK',
    tags: ['PYTHON', 'CD', 'IDE', 'VSCODE', 'GITHUB', 'FUNÇÕES', 'LAMBDA', 'LISTCOMPREHENSION', 'DICIONÁRIO'],
    available: true,
  },
  {
    id: 6,
    title: 'Manipulação de Arquivos e Bibliotecas',
    date: '12 de Março, 2026',
    duration: '01 hora e 40 minutos',
    description:
      'Aprendemos sobre como realizar a manipulação de arquivos no Python, além de introduzir bibliotecas como Pandas e Numpy',
    url: 'https://www.youtube.com/embed/1wE-8LkAOTg?si=c-ZVswbLGD-VJIeX',
    tags: ['PYTHON', 'CD', 'IDE', 'VSCODE', 'GITHUB', 'ARQUIVOS', 'MODULOS', 'BIBLIOTECAS', 'PANDAS', 'NUMPY'],
    available: true,
  },
];

export function AulasGravFundamentosPage() {
  return (
    <div>
      <Header
        heroTitle="Aulas Gravadas"
        heroSubtitle="Fundamentos de Ciência de Dados - Introdução a Python"
      />

      <main className="main-content">
        <div className="container">
          <div className="header-buttons">
            <a
              href="https://classroom.github.com/a/0v1wQ_7Z"
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
