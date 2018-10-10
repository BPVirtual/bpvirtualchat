var mongoose = require('mongoose');
 
var propostaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numeroProposta: String,
    dadosProposta: String,
    cpf: String,
    dataAceite: String,
    ip: String
});
 
var Proposta = mongoose.model('Proposta', propostaSchema);

exports.post = function (req, res) {
     
    var propostas = [];

    var item = { 
        numeroProposta: req.body.numeroProposta,
        dadosProposta: req.body.dadosProposta,
        cpf: req.body.cpf,
        dataAceite: req.body.dataAceite,
        ip: req.body.ip
    };
         
    propostas.push(item);

    Proposta.create(propostas, function(err, documents) {
        if (err) throw err;
    });

    res.send(propostas.length + ' proposta salva.');
     
};

module.exports = Proposta;