//require = demande 

const AuthentificationController = require("./controllers/authentification");
require("./services/passport");
const passport = require("passport");

const requireToken = passport.authenticate("jwt", { session: false });
const requireValidCredentials = passport.authenticate("local", { session: false});

module.exports = function (expressServer) {
    expressServer.post("/signup", AuthentificationController.signup);
    expressServer.get("/ressourceSecrete", requireToken,AuthentificationController.ressourceSecrete);
    expressServer.post("/signin",requireValidCredentials,AuthentificationController.signin);
};