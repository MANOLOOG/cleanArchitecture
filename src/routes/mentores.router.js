const express = require("express");

const mentors = require("../useCases/mentores.usecase");

const router = express.Router();

router.get("/", (request, response) => {
  const allMentors = mentors.getAllMentors();
  response.json({ message: "GET mentors", mentors: allMentors });
});

router.post("/", (request, response) => {
  const { name, email } = request.body;
  mentors.createMentor(name, email);
  response.json({ message: "Mentor created" });
});

router.delete("/:name", (request, response) => {
  const { name } = request.params;
  mentors.removeMentor(name);
  response.json({ message: "Mentor deleted" });
});

module.exports = router;
