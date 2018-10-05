var mongoose = require('mongoose');
 

var loginSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    senha: String,
    confirmado: String,
    data: String
});
 
var Login = mongoose.model('Login', loginSchema);
 
exports.post = function (req, res) {
     
    var login = [];

    var item = { 
        cpf: req.body.cpf, 
        senha: req.body.senha,
        confirmado: "S",
        data: new Date()
    };
         
    login.push(item);

    Login.create(login, function(err, documents) {
        if (err) throw err;
    });

    res.send(login.length + ' login salvo.');
     
};

module.exports = Login;