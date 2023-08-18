const db = require("../lib/db");

function createMentor(name, email) {
  const newMentor = {
    name,
    email,
  };
  const data = db.getData();
  data.mentors.push(newMentor);
  db.updateData(data);
}

function removeMentor(name) {
  const data = db.getData();
  const newMentorsList = data.mentors.filter((mentor) => mentor.name !== name);

  data.mentors = newMentorsList;
  db.updateData(data);
}

function getAllMentors() {
  const data = db.getData();
  return data.mentors;
}

module.exports = {
  createMentor,
  removeMentor,
  getAllMentors,
};
