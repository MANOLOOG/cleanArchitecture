// Describir y montar el servidor

const express = require("express");

const kodersRouter = require("./routes/koders.router");
const mentorsRouter = require("./routes/mentores.router");
const generationsRouter = require("./routes/generaciones.router");

const app = express();

app.use(express.json());

app.use("/koders", kodersRouter);
app.use("/mentores", mentorsRouter);
app.use("/generaciones", generationsRouter);

app.get("/", (request, response) => {
  response.json({
    message: "API kodemia clean",
  });
});

module.exports = app;
