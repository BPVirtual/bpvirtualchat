var mongoose = require('mongoose');
 

var loginSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    senha: String,
    dataCadastro: String,
    dataPrimeiroLogin: String,
    dataUltimoLogin: String
});
 
var Login = mongoose.model('Login', loginSchema);

module.exports = Login;