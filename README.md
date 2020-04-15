<h1 align="center">Conceitos do Node.js</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/amandavianna/desafio-conceitos-nodejs">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/amandavianna/desafio-conceitos-nodejs?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/amandavianna/desafio-conceitos-nodejs">

  <a href="https://github.com/amandavianna/desafio-conceitos-nodejs/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/amandavianna/desafio-conceitos-nodejs.svg">
  </a>
</p>

<p>Essa será uma aplicação para armazenar repositórios, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".</p>

## Rotas da aplicação:

- **`POST /repositories`**: A rota recebe title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório;

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: Altera o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: Deleta o repositório com o id presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: Aumenta o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes aumenta em 1;

## Como usar:

```bash
# Clone this repository
$ git clone https://github.com/amandavianna/desafio-conceitos-nodejs

# Go into the repository
$ cd desafio-conceitos-nodejs

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```
