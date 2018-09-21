 
exports.get = function(req, res) {
 
	const Json2csvParser = require('json2csv').Parser;
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
		'consultor.email'
    	];
	
	var json = [{
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
    }];
	 
	const json2csvParser = new Json2csvParser({ fields, quote: '', delimiter: ';' });
	const csv = json2csvParser.parse(json);

	res.set('Content-Disposition', 'attachment;filename=proponentes.csv');
	res.set('Content-Type', 'application/octet-stream');

	res.send(csv);

};
