var mongoose = require('mongoose');
 
var proponenteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: {
        type: String, 
        required: true
    },
    nome: {
        type: String, 
        required: true
    },
    sobrenome: {
        type: String, 
        required: true
    },
    cargo: String
    
});
 
var Proponente = mongoose.model('Proponente', proponenteSchema);
 
module.exports = Proponente;
