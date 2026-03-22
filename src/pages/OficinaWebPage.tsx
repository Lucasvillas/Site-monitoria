import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaWebPage() {
  return (
    <WorkshopPage
      title="Desenvolvimento Web"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/magoWeb.png"
      schedule="Quarta e Sexta: 11h às 13h"
      about="Aprenda a criar websites modernos e responsivos com HTML, CSS e JavaScript. Nesta oficina, você entenderá desde o básico da construção de páginas até conceitos avançados de web design e interatividade."
      learnings={[
        'HTML5: Estruturação semântica de páginas',
        'CSS3: Estilização e layouts responsivos',
        'JavaScript: Interatividade e manipulação do DOM',
        'Frameworks: Introdução a bibliotecas populares',
        'Deploy: Publicação de seus projetos online',
      ]}
      target={[
        'Iniciantes em desenvolvimento web',
        'Alunos que querem aprender HTML, CSS e JavaScript',
        'Pessoas interessadas em Front-End development',
      ]}
    />
  );
}
