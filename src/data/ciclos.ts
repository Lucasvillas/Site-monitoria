export interface Worksheet {
  nome: string;
  dias?: string;
  hora?: string;
  formato?: 'Presencial' | 'Online';
}

export interface Ciclo {
  id: string;
  nome: string;
  dataInicio: string;
  dataFim: string;
  corBase: string;
  corBorda: string;
  oficinas: Worksheet[];
}

export const CICLOS: Ciclo[] = [
  {
    id: 'ciclo-0',
    nome: 'Ciclo 0 (02/03 a 13/03)',
    dataInicio: '2026-03-02',
    dataFim: '2026-03-13',
    corBase: '#b3e5fc',
    corBorda: '#0288d1',
    oficinas: [
      {
        nome: 'Fundamentos da Computação',
        dias: 'Seg, Qua e Sex',
        hora: '11h às 13h',
        formato: 'Presencial',
      },
      {
        nome: 'Fundamentos da Computação',
        dias: 'Seg, Qua e Sex',
        hora: '17h às 19h',
        formato: 'Presencial',
      },
      {
        nome: 'Fundamentos para Ciência de Dados',
        dias: 'Seg, Ter e Qui',
        hora: '17h às 19h',
        formato: 'Online',
      },
    ],
  },
  {
    id: 'ciclo-1',
    nome: 'Ciclo 1 (16/03 a 27/03)',
    dataInicio: '2026-03-16',
    dataFim: '2026-03-27',
    corBase: '#c8e6c9',
    corBorda: '#388e3c',
    oficinas: [
      {
        nome: 'Criação de Modelos de Personagens 3D',
        dias: 'Seg, Qua e Sex',
        hora: '11h às 13h',
        formato: 'Presencial',
      },
      {
        nome: 'Oficina de HTML/CSS',
        dias: 'Qua e Sex',
        hora: '11h às 13h',
        formato: 'Presencial',
      },
      {
        nome: 'Oficina de Java',
        dias: 'Seg, Ter e Qui',
        hora: '11h às 13h',
        formato: 'Presencial',
      },
      {
        nome: 'Oficina de Java',
        dias: 'Seg, Qua e Sex',
        hora: '17h às 19h',
        formato: 'Presencial',
      },
      {
        nome: 'Oficina de Linux',
        dias: 'Ter e Qui',
        hora: '17h às 19h',
        formato: 'Presencial',
      },
      {
        nome: 'Ciência de Dados - Ferramentas e Frameworks',
        dias: 'Seg, Ter e Qui',
        hora: '17h às 19h',
        formato: 'Online',
      },
    ],
  },
  {
    id: 'ciclo-2',
    nome: 'Ciclo 2 (06/04 a 30/04)',
    dataInicio: '2026-04-06',
    dataFim: '2026-04-30',
    corBase: '#ffe0b2',
    corBorda: '#f57c00',
    oficinas: [
      { nome: 'Criação de Modelos de Personagens 3D' },
      { nome: 'Ciência de Dados - Machine Learning' },
      { nome: 'A confirmar' },
      { nome: 'A confirmar' },
      { nome: 'A confirmar' },
    ],
  },
  {
    id: 'ciclo-3',
    nome: 'Ciclo 3 (11/05 a 05/06)',
    dataInicio: '2026-05-11',
    dataFim: '2026-06-05',
    corBase: '#e1bee7',
    corBorda: '#7b1fa2',
    oficinas: [
      { nome: 'Criação de Modelos de Personagens 3D' },
      { nome: 'Ciência de Dados - Introdução a Deep Learning' },
      { nome: 'A confirmar' },
      { nome: 'A confirmar' },
      { nome: 'A confirmar' },
    ],
  },
];

export const MESES = [
  { mes: 2, ano: 2026, nome: 'Março' },
  { mes: 3, ano: 2026, nome: 'Abril' },
  { mes: 4, ano: 2026, nome: 'Maio' },
  { mes: 5, ano: 2026, nome: 'Junho' },
];
