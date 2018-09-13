var mongoose = require('mongoose');
 
var proponenteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    nome: String,
    sobrenome: String,
    nacionalidade: String,
    dataNascimento: String,
    sexo: String,
    estadoCivil: String,
    profissao: String,
    cargo: String,
    dataAdmissao: String,
    salario: String,
    endereco: {
        logradouro: String,
        bairro: String,
        cep: String,
        cidade: String,
        uf: String
    },
    empresa: {
        razaoSocial: String,
        cnpj: String
    },
    consultor: {
        nome: String,
        email: String
    }
});
 
var Proponente = mongoose.model('Proponente', proponenteSchema);
 
module.exports = Proponente;
