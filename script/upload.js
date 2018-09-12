var csv = require('fast-csv');
var mongoose = require('mongoose');
var Proponente = require('./proponente');
 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('Nenhum arquivo foi carregado.');
     
    var proponentesFile = req.files.file;
 
    var proponentes = [];
         
    csv
     .fromString(proponentesFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         proponentes.push(data);
     })
     .on("end", function(){
         Proponente.create(proponentes, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(proponentes.length + ' proponentes foram carregados com sucesso.');
     });
};
