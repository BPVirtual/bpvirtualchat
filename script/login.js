var mongoose = require('mongoose');
 

var loginSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    senha: String,
    confirmado: String,
    data: String
});
 
var Login = mongoose.model('Login', loginSchema);

module.exports = Login;