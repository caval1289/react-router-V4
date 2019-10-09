const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan");
const expressServer = express();
const router = require("./route");
const http = require("http");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Aless:aless@cluster0-pl98k.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection
    .once("open", () => console.log("Connecté à MongoDB"))
    .on("error", error => console.log("Erreur de connexion à MongoDB : ", error))
expressServer.use(morgan("combined"))
expressServer.use(bodyParser.json({ type: "*/" }))
router(expressServer);
const port = 5000;
const server = http.createServer(expressServer);
server.listen(port);
console.log("Le serveur écoute sur le port : ", port);