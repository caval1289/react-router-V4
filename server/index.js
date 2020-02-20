const express = require("express"); //Coeur du serveur il repont au requette 
const bodyParser = require("body-parser") // permer de recupere les params quand on les envois
const morgan = require("morgan"); // les log
const expressServer = express(); // demares le serveur express
const router = require("./route"); //route
const http = require("http"); 
const mongoose = require("mongoose");

require('dotenv').config()

process.on('uncaughtException', async err => {
    console.error('Uncaught exception', JSON.stringify(err));    
  });

 mongoose.connect(`${process.env.MANGODB_URL}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
) 


mongoose.connection
    .once("open", () => console.log("Connecté à MongoDB"))
    .on("error", error => console.log("Erreur de connexion à MongoDB : ", error))
expressServer.use(morgan("combined"))
expressServer.use(bodyParser.json({ type: "*/*" }))
router(expressServer);
const port = 5000;
const server = http.createServer(expressServer);
server.listen(port);
console.log("Le serveur écoute sur le port : ", port);

process.on('uncaughtException', async err => {
    console.error('Uncaught exception', JSON.stringify(err));
    
  });