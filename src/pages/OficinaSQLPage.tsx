import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaSQLPage() {
  return (
    <WorkshopPage
      title="Banco de Dados e SQL"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/mago.png"
      schedule="A definir"
      about="Aprenda a trabalhar com bancos de dados relacionais! Nesta oficina, você dominará SQL, desde queries básicas até otimizações avançadas. Entenda como armazenar, recuperar e gerenciar dados eficientemente."
      learnings={[
        'Fundamentos de BD: Modelos relacional e relacional estendido',
        'SQL Básico: SELECT, INSERT, UPDATE, DELETE',
        'JOINs: Relacionamento entre tabelas',
        'Agregações: GROUP BY, HAVING e funções analíticas',
        'Otimização: Indexes, views e performance',
      ]}
      target={[
        'Alunos que querem aprender SQL',
        'Desenvolvedores backend em formação',
        'Analistas de dados que precisam de SQL',
      ]}
    />
  );
}
