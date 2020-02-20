//req = les infos qui rentre
//res= se qu'on va pouvoir renvoyer 
//next= callback une fonction de rappe

exports.signup = function(req,res,next){
    const email = req.body.email;
    const password = req.body.password;
    console.log("email + password", email, password);
    res.send({test:"blabla"})
};
