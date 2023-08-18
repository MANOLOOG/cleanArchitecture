// levantar el servidor
// iniciar la aplicacion

const server = require("./src/server");
const db = require("./src/lib/db");

db.createIfNotExists();

server.listen(8080, () => {
  console.log("server listening on port 8080");
});
