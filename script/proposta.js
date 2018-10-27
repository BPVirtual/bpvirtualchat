var mongoose = require('mongoose');
 
var propostaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numeroProposta: String,
    dataAceite: String,
    dadosProposta: {
        cpf: String,
        nomeCompleto: String,
        dataNascimento: String,
        tipoPlano: String,
        tipoTributacao: String,
        valorContribuicao: String,
        direcionamentoFundos: String
    }
});
 
var Proposta = mongoose.model('Proposta', propostaSchema);

exports.post = function (req, res) {
     
    var propostas = [];

    var item = { 
        numeroProposta: req.body.numeroProposta,
        dataAceite: req.body.dataAceite,
        dadosProposta: req.body.dadosProposta.cpf,
        dadosProposta: req.body.dadosProposta.nomeCompleto,
        dadosProposta: req.body.dadosProposta.dataNascimento,
        dadosProposta: req.body.dadosProposta.tipoPlano,
        dadosProposta: req.body.dadosProposta.tipoTributacao,
        dadosProposta: req.body.dadosProposta.valorContribuicao,
        dadosProposta: req.body.dadosProposta.direcionamentoFundos
    };
         
    propostas.push(item);

    Proposta.create(propostas, function(err, documents) {
        if (err) throw err;
    });

    res.send(propostas.length + ' proposta salva.');
     
};

module.exports = Proposta;