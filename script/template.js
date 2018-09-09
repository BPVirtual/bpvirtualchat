var json2csv = require('json2csv').parse;
 
exports.get = function(req, res) {
 
    var fields = [
        'cpf',
        'name.firstName',
        'name.lastName',
        'biography'
    ];

    var json = {'cpf': '11122233300', 'name.firstName': 'Teste', 'name.lastName': 'Teste2', 'biography': 'Teste3'}
 
    var csv = json2csv(json, fields);
 
    res.set("Content-Disposition", "attachment;filename=authors.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};