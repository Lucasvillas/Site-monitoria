import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaLogicaPage() {
  return (
    <WorkshopPage
      title="Oficina de Java"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/mago redes.png"
      schedule="Segunda, Terça e Quinta: 11h às 13h | Segunda, Quarta e Sexta: 17h às 19h"
      about="Aprenda a programar em Java, uma das linguagens mais populares do mercado. Desde conceitos básicos de lógica de programação até programação orientada a objetos, você dominará Java passo a passo."
      learnings={[
        'Lógica de Programação: Conceitos fundamentais',
        'Sintaxe Java: Variáveis, operadores e controle de fluxo',
        'Orientação a Objetos: Classes, herança e polimorfismo',
        'Estruturas de Dados: Arrays, listas e coleções',
        'Projetos Práticos: Desenvolvimento de aplicações reais',
      ]}
      target={[
        'Iniciantes em programação',
        'Alunos que querem aprender Java',
        'Programadores que desejam aprimorar habilidades em OOP',
      ]}
    />
  );
}
