import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaCienciaDadosPage() {
  return (
    <WorkshopPage
      title="Oficina de Ciência de Dados"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/mago fund.png"
      schedule="Segunda, Terça e Quinta: 17h às 19h"
      about="Introdução prática ao mundo da Ciência de Dados! Aprenda a coletar, processar, analisar e visualizar dados usando Python e ferramentas modernas. Prepare-se para uma carreira em analytics e inteligência artificial."
      learnings={[
        'Python para Dados: Pandas, NumPy e Matplotlib',
        'Análise Exploratória: EDA e visualização de dados',
        'Estatística: Conceitos estatísticos aplicados',
        'Machine Learning: Algoritmos de aprendizado',
        'Projetos Reais: Análise de datasets públicos',
      ]}
      target={[
        'Alunos interessados em análise de dados',
        'Programadores que querem aprender Data Science',
        'Profissionais que buscam insights baseados em dados',
      ]}
      playlistLink="/aulas-gravadas-fundamentos-ciencia-de-dados"
    />
  );
}
