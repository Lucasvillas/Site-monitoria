# Site da Monitoria de TI - CEUB

Este repositório contém o código-fonte do portal oficial do grupo de monitoria. O site funciona como ponto de encontro digital para estudantes de tecnologia, com materiais de estudo, apoio acadêmico e divulgação de projetos colaborativos.

Site em produção:
https://site-monitoria-blue.vercel.app/

## Sobre o Projeto

O portal foi criado para centralizar as iniciativas do grupo de monitoria, facilitar o acesso a conteúdo de aprendizado e fortalecer a comunidade de TI da universidade.

Principais seções:
- Página Inicial: apresentação da missão e áreas de atuação.
- Oficinas: catálogo de oficinas atuais e acervo de edições passadas.
- PITACO: página dedicada ao Programa de Integração de Tecnologias, Aprendizado, Colaboração e Organização.
- Equipe: membros atuais e histórico de ex-membros.
- Apoio Acadêmico: links de comunidades e canais de suporte.

## Tecnologias Utilizadas

Versão atual da aplicação:
- React 18
- TypeScript
- Vite
- React Router DOM
- CSS
- Vercel (deploy)

Estrutura relevante:
- src/: aplicação React e roteamento.
- legacy/: páginas legadas em HTML usadas na compatibilidade da migração.
- public/legacy/: cópias públicas dos assets legados para entrega estática.

## Projeto PITACO

O PITACO é um espaço horizontal de aprendizado prático em que cada ciclo transforma ideias em projetos reais.

Objetivos:
- aprendizado colaborativo
- construção de portfólio
- desenvolvimento de soluções em software, protótipos e trilhas estruturadas de estudo

## Como Executar Localmente

Pré-requisitos:
- Node.js 18 ou superior
- npm

1. Clone o repositório:

```bash
git clone https://github.com/monitoria-ti/Site-monitoria.git
```

2. Acesse a pasta do projeto:

```bash
cd Site-monitoria
```

3. Instale as dependências:

```bash
npm install
```

4. Execute em modo de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador:

```text
http://localhost:5173
```

## Build de Produção

```bash
npm run build
```

Para testar o build localmente:

```bash
npm run preview
```

## Licença

Este projeto é de uso institucional da Monitoria de TI - CEUB.
