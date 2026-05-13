# 🚗 Sistema Automotivo

## 📌 Sobre o Projeto

O **Sistema Automotivo** foi desenvolvido como projeto acadêmico com o objetivo de solucionar problemas de organização, controle e gerenciamento de veículos em uma loja automotiva ou concessionária.

Durante a análise do problema, foi identificado que muitas lojas realizam o controle de veículos manualmente ou de forma descentralizada, causando:

- dificuldade para localizar veículos;
- inconsistência nas informações;
- ausência de controle de disponibilidade;
- erros de cadastro;
- dificuldade de visualização do estoque;
- falta de padronização dos dados;
- dificuldade de atualização rápida das informações.

Para solucionar esses problemas, foi desenvolvido um sistema web completo utilizando **Java + Spring Boot** no backend e **HTML, CSS e JavaScript** no frontend.

O sistema permite gerenciar veículos de forma simples, organizada e segura através de operações CRUD e dashboard de controle.

---

## 🎥 Apresentação do Projeto

🔗 LinkedIn:  
https://www.linkedin.com/posts/%C3%A1gata-santos-dev_java-springboot-fullstack-ugcPost-7460477634762735616-deHQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmE7EABUKiP6kx_EaoHd56PscMBNW3hYIY

---

# 🎯 Objetivo do Sistema

O principal objetivo do sistema é facilitar o gerenciamento de veículos por meio de uma aplicação web moderna, permitindo:

- cadastrar veículos;
- editar informações;
- excluir registros;
- pesquisar veículos rapidamente;
- visualizar indicadores do estoque;
- garantir padronização dos dados;
- evitar erros de cadastro.

---

# ✅ Funcionalidades Implementadas

## 🚘 Cadastro de Veículos

Permite cadastrar:

- modelo;
- marca;
- ano;
- cor;
- preço;
- quilometragem;
- status do veículo.

---

## ✏️ Atualização de Veículos

O sistema permite editar qualquer veículo já cadastrado.

---

## ❌ Exclusão de Veículos

Foi implementada confirmação antes da exclusão para evitar remoções acidentais.

---

## 🔍 Pesquisa Inteligente

A busca dinâmica permite pesquisar veículos por:

- modelo;
- marca;
- ano;
- cor;
- preço;
- quilometragem;
- status.

A pesquisa acontece em tempo real.

---

## 📊 Dashboard de Controle

O dashboard exibe:

- total de veículos cadastrados;
- quantidade de disponíveis;
- quantidade de indisponíveis;
- valor total do estoque.

---

## ⚠️ Validações do Sistema

O sistema impede:

- valores negativos;
- ano inválido;
- campos vazios;
- status fora do padrão.

---

## 🔔 Mensagens do Sistema

O usuário recebe alertas visuais para:

- cadastro realizado;
- atualização realizada;
- exclusão realizada;
- erros de preenchimento.

---

# 🛠 Tecnologias Utilizadas

## Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Maven
- MySQL

---

## Frontend

- HTML5
- CSS3
- JavaScript

---

# 🧱 Arquitetura do Projeto

O sistema foi desenvolvido seguindo arquitetura em camadas:

## Controller

Responsável pelas requisições HTTP.

## Service

Responsável pelas regras de negócio.

## Repository

Responsável pelo acesso ao banco de dados.

## Model

Representação das entidades do sistema.

## Exception

Tratamento global de erros e validações.

---

# 📂 Estrutura do Projeto

```bash
src
 ├── main
 │
 │   ├── java
 │   │
 │   │   └── com.agata.automotivo
 │   │
 │   │       ├── controller
 │   │       ├── service
 │   │       ├── repository
 │   │       ├── model
 │   │       ├── exception
 │   │       └── AutomotivoApplication.java
 │
 │   └── resources
 │
 │       ├── static
 │       │
 │       │   ├── index.html
 │       │   ├── style.css
 │       │   └── script.js
 │       │
 │       └── application.properties
