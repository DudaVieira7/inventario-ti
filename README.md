# Sistema Full Stack de Inventário de TI

![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge\&logo=mysql\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge\&logo=Postman\&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge\&logo=javascript\&logoColor=F7DF1E)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge\&logo=npm\&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-5E5C5C?style=for-the-badge\&logo=json\&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge\&logo=bootstrap\&logoColor=white)
![Responsivo](https://img.shields.io/badge/Responsivo-Sim-green?style=for-the-badge)
![Docker](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![Docker Compose](https://img.shields.io/badge/DOCKER_COMPOSE-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)

> **Mini-dashboard para gerenciamento de equipamentos de TI** de uma empresa (notebooks, periféricos, monitores e equipamentos de rede).

---

## Visualização do Projeto

<img width="2560" height="2636" alt="localhost(Nest Hub Max)" src="https://github.com/user-attachments/assets/3c75c82b-a122-4c6a-8d28-a446144126fa" />

## Sobre o Projeto

> Aplicação Single Page que permite cadastrar, listar, editar, excluir e filtrar equipamentos de TI, com identificação visual por cores de acordo com o status de cada item.

---

## 💻 Tecnologias Utilizadas

* **Backend:** Node.js + Express
* **Banco de Dados:** MySQL 8
* **Frontend:** HTML5, CSS3 e JavaScript puro
* **Containerização:** Docker e Docker Compose
* **Testes de API:** Postman

**Por que esta stack foi utilizada?**

Optei por Node.js e Express por serem as tecnologias com as quais tenho maior domínio, e por HTML, CSS e JavaScript puro no frontend para manter a aplicação simples e leve, sem a complexidade adicional de um framework, que foi um dos requisitos solicitados no desafio técnico no qual desenvolvi este projeto.

---

## 🚀 Como Executar

**Pré-requisito:** ter o Docker Desktop instalado e em execução.

### 1. Clone este repositório:

```bash
git clone https://github.com/DudaVieira7/inventario-ti.git
```

### 2. Entre na pasta do projeto:

```bash
cd inventario-ti
```

### 3. Suba a aplicação com um único comando:

```bash
docker compose up -d
```

### 4. Acesse no navegador:

```text
http://localhost:3000
```

> Não será necessária nenhuma instalação manual de dependências — o **Docker Compose** cuida de tudo: build da imagem do backend, criação do banco de dados MySQL e inicialização automática da tabela **equipamentos** via `init.sql`.

---

##  Parando a Aplicação

```bash
docker compose down
```

> Esse comando preserva os dados cadastrados, que são persistidos em um volume Docker. Para remover os dados também, utilize:

```bash
docker compose down -v
```

> **Atenção:** o comando `docker compose down -v` remove os volumes e, consequentemente, os dados persistidos no banco.

---

##  Funcionalidades do Projeto

* Cadastro de equipamentos **(CREATE)**
* Listagem com identificação visual por cor e status **(READ)**
* Edição de equipamentos **(UPDATE)**
* Exclusão de equipamentos **(DELETE)**
* Filtros por status e categoria
* Interface responsiva
* Persistência de dados via volume Docker
* Inicialização automática do banco via **init.sql**

---

## 🔐 Sobre as Credenciais no Arquivo `docker-compose.yml`

As credenciais do banco de dados estão definidas diretamente no **docker-compose.yml** para simplificar a execução pelo avaliador com um único comando, conforme solicitado no desafio.

Em um ambiente de produção real, essas credenciais seriam gerenciadas por meio de variáveis de ambiente não versionadas (como um arquivo `.env` incluído no `.gitignore`) ou por um gerenciador de segredos dedicado.

---

## 👩‍💻 Autora

> Desenvolvido por:

**[Maria Eduarda Moraes Vieira](https://github.com/DudaVieira7)**
