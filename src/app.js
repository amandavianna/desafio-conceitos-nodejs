const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const validateId = (request, response, next) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ "error": "Invalid repository ID." });
  }

  response.locals = {
    id,
    repositoryIndex
  };

  next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository);

  response.json(repository);
});

app.put("/repositories/:id", validateId, (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    ...repositories[response.locals.repositoryIndex],
    title,
    url,
    techs
  };

  repositories[response.locals.repositoryIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", validateId, (request, response) => {
  repositories.splice(response.locals.repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", validateId, (request, response) => {
  repositories[response.locals.repositoryIndex].likes++;

  return response.json(repositories[response.locals.repositoryIndex]);
});

module.exports = app;
