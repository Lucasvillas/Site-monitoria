import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaMachineLearningPage() {
  return (
    <WorkshopPage
      title="Machine Learning"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/mago levitando.png"
      schedule="Segundas e Quartas: 17h às 19h"
      about="Mergulhe no universo do Machine Learning! Aprenda a construir, treinar e avaliar modelos de IA usando Python e Scikit-Learn. Desde regressão até redes neurais, desenvolva modelos preditivos reais."
      learnings={[
        'Fundamentos de ML: Supervisionado, não-supervisionado e reforço',
        'Pré-processamento: Limpeza e preparação de dados',
        'Modelos Clássicos: Regressão, classificação e clustering',
        'Avaliação: Métricas e validação de modelos',
        'Projeto Titanic: Análise prática com dados reais',
      ]}
      target={[
        'Iniciantes em Machine Learning',
        'Cientistas de dados em formação',
        'Programadores que querem aprender IA',
      ]}
      playlistLink="/aulas-gravadas-machine-learning"
    />
  );
}
