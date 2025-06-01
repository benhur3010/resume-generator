# Gerador Automático de Currículos

Um gerador de currículo em formato web, que permite ao usuário inserir informações pessoais, educacionais, experiências profissionais, habilidades e projetos, gerando uma visualização em tempo real e exportando o resultado em PDF.

---

## Índice

- [Visão Geral](#visão-geral)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Pré-requisitos](#pré-requisitos)  
- [Como Executar](#como-executar)   

---

## Visão Geral

Este projeto consiste em uma página web responsiva que:

1. Exibe um formulário dividido em seções:
   - **Informações Pessoais** (nome, título, e-mail, telefone, localização, data de nascimento, LinkedIn e resumo profissional).
   - **Educação** (instituição, curso, período e descrição).
   - **Experiência Profissional** (empresa, cargo, período de início, período de término ou indicação de “atualmente trabalho aqui” e descrição).
   - **Habilidades** (técnicas, interpessoais, idiomas e certificações).
   - **Projetos Relevantes** (nome, descrição e URL).
2. Atualiza em tempo real um preview à direita, mostrando como ficará o currículo formatado.
3. Permite adicionar múltiplas entradas de educação, experiência e projetos dinamicamente.
4. Gera um arquivo PDF formatado (A4) contendo todo o currículo, usando a biblioteca `html2pdf.js`.

O resultado é um fluxo ágil para criar um currículo personalizado e exportá-lo em PDF sem necessidade de backend.

---

## Funcionalidades

- **Componente de visualização em tempo real**: enquanto o usuário preenche o formulário, o preview do currículo é atualizado automaticamente.
- **Adição dinâmica de seções**:
  - Adicionar/Remover entradas de educação.
  - Adicionar/Remover entradas de experiência profissional (com controle para ocultar “Data de término” se “Atualmente trabalho aqui” estiver marcado).
  - Adicionar/Remover entradas de projetos.
- **Validação inline**:
  - Campos obrigatórios (nome, título, e-mail, telefone, resumo, além de entradas de arrays).
  - Formato de e-mail e telefone verificados via Expressões Regulares.
  - Mensagens de erro exibidas no próprio formulário.
- **Cálculo de idade**: a partir da data de nascimento, calculamos a idade e exibimos no campo “Idade”. Impede datas de nascimento que indiquem idade inferior a 10 anos.
- **Exportação para PDF**:
  - Utiliza `html2pdf.js` para converter o preview em um PDF no formato A4.
  - Inclui estilos específicos para impressão (Tailwind + CSS customizado) para garantir a formatação correta do currículo.
- **Design responsivo**:
  - Baseado em Tailwind CSS.
  - Preview fixo (sticky) e formulário em colunas em telas grandes, ajustando-se em dispositivos menores.

---

## Tecnologias Utilizadas

- **HTML5** (arquivo `index.php`, embora não utilize código PHP de fato, é um HTML estático com extensão `.php` para facilitar deploy em servidores que exigem essa extensão).
- **CSS / Tailwind CSS** (`css/main.css`):
  - Estilização customizada para formulários, botões, preview e PDF (via classes utilitárias).
- **JavaScript puro** (`js/resume.js`):
  - Manipulação de DOM para adicionar/remover entradas dinamicamente.
  - Validação inline de campos, cálculo de idade e geração de preview.
- **Bibliotecas externas**:
  - [jQuery 3.7.1](https://code.jquery.com/jquery-3.7.1.min.js) (carregado, mas utilizado apenas em escopo mínimo para evitar conflito de seleção).
  - [html2pdf.js 0.10.1](https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js) (responsável pela exportação do preview em PDF).
  - [Font Awesome 6.5.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) (ícones usados nos botões de remover e exportar).
  - [Tailwind CDN](https://cdn.tailwindcss.com) (carregado via `<script>` para uso imediato de classes utilitárias no HTML).

---

## Estrutura de Pastas 

- **css/main.css**:  
  - Variáveis CSS (cores primárias, secundárias, de texto).
  - Estilos gerais de corpo, formulários, botões, preview e estilos para impressão/PDF.
- **js/resume.js**:  
  - `formatDate()`: formata `YYYY-MM` para “Mês de Ano” em português.
  - `generatePreview()`: coleta dados do `<form>` e monta o HTML do preview.
  - `generatePDF()`: aciona o html2pdf para gerar e abrir o PDF em nova janela.
  - `validateField()`: validações inline (campos mínimos, regex de e-mail e telefone, tratamento de `workEndDate[]` quando oculto).
  - `addEntry(type)`: adiciona dinamicamente blocos de “education”, “experience” ou “project” com botões de remoção.
  - Lógica de “Atualmente trabalho aqui” (ocultar/exibir o bloco de “Data de Término”).
  - Setup de event listeners no `DOMContentLoaded`.

---

## Pré-requisitos

1. **Navegador Moderno** (Chrome, Firefox, Safari, Edge) com suporte a ES6+ e consumo de `ES Modules` (no caso de CDN).
2. **Ambiente local**:
   - Como o arquivo principal está nomeado `index.php`, recomenda-se usar um servidor HTTP compatível (Apache, Nginx, XAMPP, WAMP, MAMP, Laravel Valet, etc.) para servir a página corretamente.  
   - **Obs.:** Apesar da extensão `.php`, não há código backend em PHP, então basta servir como HTML estático. Se preferir, renomeie para `index.html` e abra diretamente no navegador, mas em alguns casos bibliotecas (html2pdf.js) podem exigir protocolo HTTP(s) (garanta que as referências via CDN sejam carregadas).

---

## Como Executar

### Opção 1: Servidor Local (recomendado)

1. Clone este repositório para a sua máquina:
   ```bash
   git clone https://github.com/benhur3010/resume-generator.git
