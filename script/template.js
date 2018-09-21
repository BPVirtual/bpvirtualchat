/*var json2csv = require('json2csv').parse;
 
exports.get = function(req, res) {
 
    var fields = [
        {
          label: 'CPF Maroto', // (optional, column will be labeled 'path.to.something' if not defined)
          value: 'cpf', // data.path.to.something
        },
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
        'consultor.email'
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
 
    var csv = json2csv(json, fields);
 
    res.set("Content-Disposition", "attachment;filename=proponentes.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};
*/

const Json2csvParser = require('json2csv').Parser;

exports.get = function(req, res) {
 
    const fields = [{
      label: 'Car Name',
      value: 'cpf'
    },{
      label: 'Price USD',
      value: 'nome'
    }];

    const json2csvParser = new Json2csvParser({ fields });
    const csv = json2csvParser.parse(myCars);

    res.send(csv);
}
