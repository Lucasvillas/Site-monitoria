import { WorkshopPage } from '../components/WorkshopPage';

export function OficinaFundComputacaoPage() {
  return (
    <WorkshopPage
      title="Fundamentos da Computação"
      subtitle="Campus Asa Norte - Monitoria dos Cursos de TI"
      image="/images/mago.png"
      schedule="Segunda, Quarta e Sexta: 11h às 13h"
      about="Uma introdução completa aos fundamentos da ciência da computação. Nesta oficina, você aprenderá conceitos essenciais como arquitetura de computadores, sistemas de numeração, algoritmos e estruturas de dados."
      learnings={[
        'Arquitetura de Computadores: Hardware e software',
        'Sistemas de Numeração: Binário, octal e hexadecimal',
        'Algoritmos: Design e análise de eficiência',
        'Estruturas de Dados: Arrays, listas ligadas, árvores',
        'Complexidade: Big O e otimização de código',
      ]}
      target={[
        'Alunos iniciantes em Ciência da Computação',
        'Programadores que querem aprender fundamentos',
        'Pessoas interessadas em aprofundar conhecimentos técnicos',
      ]}
    />
  );
}
