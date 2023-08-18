const express = require("express");
const koders = require("../useCases/koders.usecase");

const router = express.Router();

router.get("/", (request, response) => {
  const allKoders = koders.getAll();
  response.json({
    message: "GET koders",
    koders: allKoders,
  });
});

router.post("/", (request, response) => {
  const { name, email, program, generation } = request.body;
  koders.create(name, email, program, generation);
  response.json({ message: "Koder created" });
});

router.delete("/:name", (request, response) => {
  const { name } = request.params;
  koders.remove(name);
  response.json({ message: "Koder deleted" });
});

module.exports = router;
