const db = require("../lib/db");

function createGen(program, number) {
  const newGen = {
    program,
    number,
  };
  const data = db.getData();
  data.generations.push(newGen);
  db.updateData(data);
}

function removeGen(program) {
  const data = db.getData();
  const newGenList = data.generations.filter((gen) => gen.program !== program);

  data.generations = newGenList;
  db.updateData(data);
}

function getAllGen() {
  const data = db.getData();
  return data.generations;
}

module.exports = {
  createGen,
  removeGen,
  getAllGen,
};
