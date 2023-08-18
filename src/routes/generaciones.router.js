const express = require("express");
const generations = require("../useCases/generaciones.usecase");
const router = express.Router();

router.get("/", (request, response) => {
  const allGenerations = generations.getAllGen();
  response.json({ message: "GET generations", generations: allGenerations });
});

router.post("/", (request, response) => {
  const { program, number } = request.body;
  generations.createGen(program, number);
  response.json({ message: "Generation created" });
});

router.delete("/:program", (request, response) => {
  const { program } = request.params;
  generations.removeGen(program);
  response.json({ message: "Generation deleted" });
});

module.exports = router;
