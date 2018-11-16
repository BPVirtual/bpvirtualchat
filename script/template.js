var json2csv = require('json2csv').parse;
 
exports.get = function(req, res) {
 
    var fields = [
        'cpf',
        'nome',
        'sobrenome',
        'nacionalidade',
        'dataNascimento',
        'sexo',
        'estadoCivil',
        'profissao',
        'cargo',
        'dataAdmissao',
        'salario',
        'endereco.logradouro',
        'endereco.bairro',
        'endereco.cep',
        'endereco.cidade',
        'endereco.uf',
        'empresa.razaoSocial',
        'empresa.cnpj',
        'consultor.nome',
        'consultor.email',
    ];

    var json = {
        'cpf': '12345678900',
        'nome': 'nomeProponente',
        'sobrenome': 'sobrenomeProponente',
        'nacionalidade': 'nacionalidade',
        'dataNascimento': '01/01/2018',
        'sexo': 'M/F',
        'estadoCivil': 'VIÚVO/SOLTEIRO/CASADO/DIVORCIADO',
        'profissao': 'EMPREGADO - OUTROS',
        'cargo': 'Cargo',
        'dataAdmissao': '01/01/2018',
        'salario': '1.000,00',
        'endereco.logradouro': 'endereco',
        'endereco.bairro': 'bairro',
        'endereco.cep': '12345678',
        'endereco.cidade': 'cidade',
        'endereco.uf': 'UF',
        'empresa.razaoSocial': 'nomeEmpresa',
        'empresa.cnpj': '12345678901234',
        'consultor.nome': 'seuNome',
        'consultor.email': 'seuEmail'
    }

    var opt = { fields, delimiter: ';', quote: ""}
 
    var csv = json2csv(json, opt);
 
    res.set("Content-Disposition", "attachment;filename=proponentes.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};
