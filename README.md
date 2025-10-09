# CEUB-FATECS - Monitoria dos Cursos de TI

Página web moderna e responsiva desenvolvida para a Monitoria dos Cursos de Tecnologia da Informação do Centro Universitário de Brasília (CEUB-FATECS).

## 📋 Descrição

Esta página foi desenvolvida com HTML5, CSS3 e JavaScript puro, sem dependência de frameworks externos. O design é moderno, profissional e totalmente responsivo, adaptando-se perfeitamente a diferentes dispositivos (desktop, tablet e mobile).

## 🎨 Características

### Design
- **Cor predominante**: Roxo institucional (#3b004d)
- **Tipografia**: Poppins (Google Fonts)
- **Layout**: Responsivo e moderno
- **Animações**: Transições suaves e efeitos fade-in

### Estrutura

#### Header
- Fundo com imagem institucional do CEUB
- Overlay com gradiente roxo
- Logotipo do CEUB no topo
- Barra de navegação com links para: Início, Monitores, Horários e Contato
- Título grande "CEUB-FATECS"
- Subtítulo "Monitoria dos Cursos de TI"

#### Conteúdo Principal

**Campus Asa Norte**
- Fundo roxo escuro
- Imagem do campus à esquerda
- Descrição detalhada dos serviços
- Destaques: Monitoria Presencial e Online, Laboratórios Modernos, Equipe Qualificada

**Campus de Taguatinga**
- Fundo cinza claro
- Imagem do campus à direita
- Descrição detalhada dos serviços
- Destaques: Atendimento Personalizado, Horários Flexíveis, Projetos Práticos

**Serviços Oferecidos**
- Fundo branco
- Grid responsivo com 4 cards:
  - Apoio em Disciplinas
  - Projetos Práticos
  - Preparação para Provas
  - Grupos de Estudo

#### Footer
- Fundo roxo escuro
- Informações institucionais
- E-mail de contato: monitoria.ti@ceub.edu.br
- Links para redes sociais (Discord, Instagram, LinkedIn)
- Copyright © 2025 CEUB-FATECS

## 🚀 Como Usar

### Visualização Local

1. **Abra o arquivo index.html** diretamente no navegador:
   ```
   Clique duas vezes no arquivo index.html
   ```

2. **Ou use um servidor HTTP local** (recomendado):
   ```bash
   # Com Python 3
   python3 -m http.server 8080
   
   # Com Node.js (npx)
   npx http-server -p 8080
   ```
   
   Depois acesse: `http://localhost:8080`

### Estrutura de Arquivos

```
ceub-monitoria/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── images/             # Pasta de imagens
│   ├── logo.png        # Logotipo do CEUB
│   ├── campus-hero.jpg # Imagem do header
│   ├── campus-asa-norte.jpg
│   └── campus-taguatinga.jpg
└── README.md           # Este arquivo
```

## 📱 Responsividade

A página foi desenvolvida com abordagem **mobile-first** e se adapta perfeitamente aos seguintes breakpoints:

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile pequeno**: < 480px

### Adaptações por Dispositivo

**Desktop**
- Layout em duas colunas para seções de campus
- Navegação horizontal completa
- Imagens em tamanho completo

**Tablet**
- Layout em coluna única
- Navegação horizontal compacta
- Imagens redimensionadas

**Mobile**
- Layout em coluna única
- Navegação em linha com quebra automática
- Títulos e textos reduzidos
- Cards de serviços empilhados

## ✨ Funcionalidades JavaScript

- **Scroll suave**: Navegação entre seções com animação
- **Active link**: Destaque automático do link ativo baseado na posição do scroll
- **Intersection Observer**: Animações de entrada ao rolar a página
- **Parallax**: Efeito parallax no header
- **Hover effects**: Efeitos visuais ao passar o mouse sobre elementos interativos

## 🎯 Personalização

### Alterar Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-purple: #3b004d;
    --secondary-purple: #5a0070;
    --light-purple: #7a1a8f;
    --accent-pink: #e91e63;
    /* ... outras cores */
}
```

### Alterar Imagens

Substitua os arquivos na pasta `images/`:
- `logo.png` - Logotipo (recomendado: PNG transparente)
- `campus-hero.jpg` - Imagem do header (recomendado: 1920x600px)
- `campus-asa-norte.jpg` - Imagem do Campus Asa Norte (recomendado: 800x400px)
- `campus-taguatinga.jpg` - Imagem do Campus Taguatinga (recomendado: 800x400px)

### Alterar Conteúdo

Edite o arquivo `index.html` e localize as seções:
- `<header>` - Cabeçalho e navegação
- `<section id="campus-asa-norte">` - Seção Campus Asa Norte
- `<section id="campus-taguatinga">` - Seção Campus Taguatinga
- `<section class="services-section">` - Seção de Serviços
- `<footer>` - Rodapé

### Adicionar Links de Navegação

Para adicionar novos links funcionais, edite:

1. **HTML** (`index.html`):
   ```html
   <li><a href="#nova-secao" class="nav-link">Nova Seção</a></li>
   ```

2. **Crie a seção correspondente**:
   ```html
   <section id="nova-secao" class="campus-section">
       <!-- Conteúdo -->
   </section>
   ```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Interatividade e animações
- **Google Fonts**: Tipografia Poppins

## 📄 Licença

© 2025 CEUB-FATECS. Todos os direitos reservados.

## 📞 Contato

Para dúvidas ou sugestões sobre a página:
- **E-mail**: monitoria.ti@ceub.edu.br
- **Instituição**: Centro Universitário de Brasília - CEUB

---

**Desenvolvido para a Monitoria dos Cursos de TI do CEUB-FATECS**

