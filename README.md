# 🚗 Sistema Automotivo

## 📌 Sobre o Projeto

O Sistema Automotivo foi desenvolvido como projeto acadêmico com o objetivo de solucionar problemas de organização, controle e gerenciamento de veículos em uma loja automotiva ou concessionária.

Durante a análise do problema, foi identificado que muitas lojas realizam o controle de veículos manualmente ou de forma descentralizada, causando:

- dificuldade para localizar veículos;
- inconsistência nas informações;
- ausência de controle de disponibilidade;
- erros de cadastro;
- dificuldade de visualização do estoque;
- falta de padronização dos dados;
- dificuldade de atualização rápida das informações.

Para solucionar esses problemas, foi desenvolvido um sistema web completo utilizando Java + Spring Boot no backend e HTML/CSS/JavaScript no frontend.

O sistema permite gerenciar veículos de forma simples, organizada e segura através de operações CRUD e dashboard de controle.

---

# 🎯 Objetivo do Sistema

O objetivo principal do sistema é facilitar o gerenciamento de veículos por meio de uma aplicação web moderna, permitindo:

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
```

---

# 🗄 Banco de Dados

O banco utilizado foi o MySQL.

## Criação do Banco

```sql
CREATE DATABASE automotivo;
```

---

# ⚙️ Configuração do application.properties

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/automotivo
spring.datasource.username=root
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# ▶️ Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Abrir a IDE

Abrir no:

- Spring Tool Suite (STS)
- IntelliJ IDEA
- Eclipse

Importar como projeto Maven.

---

## 3. Executar o MySQL

Garantir que o MySQL esteja iniciado.

---

## 4. Executar o projeto

Rodar:

```bash
AutomotivoApplication.java
```

---

# 🌐 Acesso ao Sistema

## Frontend

```bash
http://localhost:8080
```

## API REST

```bash
http://localhost:8080/veiculos
```

---

# 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /veiculos | Lista todos |
| GET | /veiculos/{id} | Busca por ID |
| POST | /veiculos | Cadastra veículo |
| PUT | /veiculos/{id} | Atualiza veículo |
| DELETE | /veiculos/{id} | Remove veículo |

---

# 🎨 Interface do Sistema

O sistema possui:

✅ Layout responsivo  
✅ Dashboard visual  
✅ Alertas dinâmicos  
✅ Pesquisa em tempo real  
✅ Tabela organizada  
✅ Status coloridos  
✅ Confirmação de exclusão  
✅ Formatação monetária  
✅ Melhor experiência visual para o usuário  

---

# 🧪 Testes Realizados

Foram realizados testes de:

- cadastro;
- atualização;
- exclusão;
- pesquisa;
- validações;
- responsividade;
- dashboard;
- integração frontend/backend.

---

# 🚀 Melhorias Futuras

Possíveis melhorias futuras:

- autenticação de usuários;
- login administrativo;
- upload de imagens;
- geração de relatórios;
- exportação PDF;
- filtros avançados;
- paginação;
- gráficos estatísticos.

---

# 📚 Aprendizados Obtidos

Durante o desenvolvimento foram praticados:

- criação de APIs REST;
- integração frontend/backend;
- manipulação do DOM;
- consumo de API com Fetch;
- validações;
- responsividade;
- arquitetura MVC;
- boas práticas de organização.

---

# 👩‍💻 Desenvolvido por

Ágata Oliveira

Projeto acadêmico desenvolvido para a disciplina de Object Oriented Programming.