# 📊 Sistema de Gestão de Funcionários e Cálculo de IRRF

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

Este projeto foi desenvolvido como parte do **Teste Técnico Prático** para a vaga de Frontend na **SEIDOR**. Trata-se de uma aplicação web (SPA) para gerenciamento de funcionários, que realiza automaticamente o cálculo do Imposto de Renda Retido na Fonte (IRRF) com base na tabela progressiva.

---

## ✨ Funcionalidades (Features)

A aplicação atende a todos os requisitos do teste técnico:
- **Create (Cadastro):** Adição de novos funcionários informando Nome, CPF, Salário Bruto, Desconto da Previdência e Número de Dependentes.
- **Read (Listagem & Filtro):** Visualização em formato de tabela com dados calculados. Inclui barra de pesquisa dinâmica para filtrar por Nome ou CPF.
- **Update (Atualização):** Edição rápida de funcionários já cadastrados, recalculando automaticamente os impostos ao salvar.
- **Delete (Exclusão):** Remoção de funcionários da base de dados local.
- **Business Logic (Cálculos Automáticos):** Cálculo em tempo real do Salário Base IR e Desconto IRRF baseado na regra de negócio estipulada.

---

## 🛠️ Tecnologias Utilizadas

Para garantir performance, tipagem estática e um código limpo, a stack escolhida foi:
- **[React.js](https://reactjs.org/)** (com [Vite](https://vitejs.dev/) para build e setup ultrarrápido)
- **[TypeScript](https://www.typescriptlang.org/)** (Garantindo segurança de tipos e prevenindo erros em tempo de compilação)
- **Context API** (Gerenciamento de estado global nativo do React, sem necessidade de bibliotecas externas pesadas)
- **[Styled-components](https://styled-components.com/)** (CSS-in-JS para encapsulamento de estilos e criação de um Design System básico)

---

## 🚀 Como executar o projeto localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 16 ou superior) e o **npm** instalados na sua máquina.

### Passo a Passo

1. **Faça o download ou clone o repositório:**
   Extraia os arquivos do projeto para uma pasta no seu computador.

2. **Abra o terminal na raiz do projeto** (onde está o arquivo `package.json`).

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   O terminal exibirá uma URL local (geralmente `http://localhost:5173/`). Clique no link ou cole-o no seu navegador.

---

## 📖 Como usar a aplicação

1. **Cadastrando:** Preencha os campos no formulário superior. Atenção: utilize ponto (`.`) para casas decimais nos valores numéricos se seu teclado não formatar automaticamente. Clique em **"Cadastrar Funcionário"**.
2. **Visualizando:** O funcionário aparecerá na tabela abaixo. O sistema mostrará as colunas extras de `Salário Base IR` e `Desconto IRPF` preenchidas automaticamente pelo motor de cálculo.
3. **Filtrando:** Use a barra de pesquisa logo acima da tabela. Digite qualquer parte do Nome ou do CPF e a tabela se ajustará em tempo real.
4. **Editando:** Clique no botão amarelo **"Editar"** na linha de um funcionário. O formulário será preenchido com os dados dele. Altere o que precisar e clique em **"Atualizar Funcionário"**. Para cancelar, clique em **"Cancelar Edição"**.
5. **Excluindo:** Clique no botão vermelho **"Excluir"** para remover o registro.

---

## 🗂️ Estrutura de Pastas Principal

```text
src/
 ┣ components/         # Componentes visuais (Formulário, Tabela)
 ┣ context/            # Context API (Estado global e lógica de CRUD)
 ┣ utils/              # Funções utilitárias (Regra de negócio do IRRF puro)
 ┣ types.ts            # Tipagens globais do TypeScript (Interfaces)
 ┣ App.tsx             # Ponto de entrada estrutural da aplicação
 ┗ main.tsx            # Ponto de inicialização do React
```

---
*Desenvolvido para o processo seletivo da SEIDOR.*
