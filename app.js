const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

require("./db");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("views"));

app.listen(3333, function() {
  console.log("Servidor rodando na porta 3333");
});
