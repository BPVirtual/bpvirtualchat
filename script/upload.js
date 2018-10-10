var csv = require('fast-csv');
var mongoose = require('mongoose');
var Proponente = require('./proponente');
var Login = require('./login');
const crypto = require('crypto');
 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('Nenhum arquivo foi carregado.');
     
    var proponentesFile = req.files.file;
 
    var proponentes = [];
    var login = [];
         
    csv
     .fromString(proponentesFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();

         var dataNascimento = data.dataNascimento;
         dataNascimento = dataNascimento.substring(dataNascimento.length-4, dataNascimento.length);
         var dataAdmissao = data.dataAdmissao;
         dataAdmissao = dataAdmissao.substring(dataAdmissao.length-4, dataAdmissao.length);

         var secret = dataNascimento+dataAdmissao;
        
         var	key = 'teoBP';
         const hash = crypto.createHmac('sha256', secret).update(key).digest('hex');

         var senha = hash;
          
         proponentes.push(data);

         //data['_id'] = new mongoose.Types.ObjectId();
         data['senha'] = senha;
         data['dataCadastro'] = new Date();
         data['dataPrimeiroLogin'] = "";
         data['dataUltimoLogin'] = "";


         login.push(data);
     })
     .on("end", function(){
         Proponente.create(proponentes, function(err, documents) {
            if (err) throw err;
         });

         Login.create(login, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(proponentes.length + ' proponentes foram carregados com sucesso.');
     });
};