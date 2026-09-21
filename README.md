# Sistema fullStack Inventário de TI 💻

![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![EXPRESS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![NODEJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![POSTMAN](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsivo-Sim-green?style=for-the-badge)
![DOKER](https://img.shields.io/badge/DOCKER-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![DOKERCOMPOSE](https://img.shields.io/badge/DOCKER_COMPOSE-0078D6?style=for-the-badge&logo=windows&logoColor=white)


> **Mini-dashboard para gerenciamento de equipamentos de TI** de uma empresa (notebooks, periféricos, monitores e equipamentos de rede).
---
## Visualização do Projeto:

<img width="2560" height="2636" alt="localhost(Nest Hub Max)" src="https://github.com/user-attachments/assets/3c75c82b-a122-4c6a-8d28-a446144126fa" />

## Sobre o projeto

> Aplicação single-page que permite cadastrar, listar, editar, excluir e filtrar equipamentos de TI,
>  com identificação visual por cores de acordo com o status de cada item.  <br>
>
---
</br>

## 👩‍💻Tecnologias utlizadas

* **BackEnd**: Node.js + express</br>
* **Banco de Dados**: MySQL8</br>
* **FrontEnd**: html5,css3, javascript puro</br>
* **Containerização**: Docker e Docker Compose</br>
* **Testes de API**: 	Postman</br></br>

**Porque foi utilizada essa stack?** Bom optei por Node.js/Express por ser a tecnologia com a qual tenho maior domínio,
e por HTML/CSS/JS puro no frontend para manter a aplicação simples e leve, sem a complexidade adicional de um framework, que foi um dos requisitos
pedidos no desafio técnico ao qual desenvolvi este projeto.</br>

## 🚀Como Executar:
**Pré-requisito**: ter o Docker Desktop instalado e em execução.</br>
* **1°** : clone este repositório:
  ```bash
  git clone https://github.com/DudaVieira7/inventario-ti

* **2** : Suba a aplicação com um único comando:
  ```bash
  docker-compose up -d

* **3**: Acesse no navegador:
  ```bash
   http://localhost:3000

> Não será necessária nenhuma instalação manual de dependências — o **Docker Compose** cuida de tudo: build da imagem do backend,
>  criação do banco de dados MySQL e inicialização automática da tabela **equipamentos** via **init.sql**.
>

