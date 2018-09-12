var json2csv = require('json2csv').parse;
 
exports.get = function(req, res) {
 
    var fields = [
        'cpf',
        'nome',
        'sobrenome',
        'cargo'
    ];

    var json = {'cpf': '11122233300', 'nome': 'Teste', 'sobrenome': 'Teste2', 'cargo': 'Teste3'}
 
    var csv = json2csv(json, fields);
 
    res.set("Content-Disposition", "attachment;filename=proponentes.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};
