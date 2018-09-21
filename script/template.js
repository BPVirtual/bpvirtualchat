 
exports.get = function(req, res) {
 
	const Json2csvParser = require('json2csv').Parser;
	const fields = [{
	  label: 'CPF',
	  value: 'cpf'
	},{
	  label: 'Nome',
	  value: 'nome'
	},{
	  label: 'Sobrenome',
	  value: 'sobrenome'
	},{
	  label: 'Nacionalidade',
	  value: 'nacionalidade'
	},{
	  label: 'Data de Nascimento',
	  value: 'dataNascimento'
	},{
	  label: 'Sexo',
	  value: 'sexo'
	},{
	  label: 'Estado Civil',
	  value: 'estadoCivil'
	},{
	  label: 'Profissão',
	  value: 'profissao'
	},{
	  label: 'Cargo',
	  value: 'cargo'
	},{
	  label: 'Data de Admissão',
	  value: 'dataAdmissao'
	},{
	  label: 'Salário',
	  value: 'salario'
	},{
	  label: 'Endereço - Logradouro',
	  value: 'endereco.logradouro'
	},{
	  label: 'Endereço - Bairro',
	  value: 'endereco.bairro'
	},{
	  label: 'Endereço - CEP',
	  value: 'endereco.cep'
	},{
	  label: 'Endereço - Cidade',
	  value: 'endereco.cidade'
	},{
	  label: 'Endereço - UF',
	  value: 'endereco.uf'
	},{
	  label: 'Empresa - Razão Social',
	  value: 'empresa.razaoSocial'
	},{
	  label: 'Empresa - CNPJ',
	  value: 'empresa.cnpj'
	},{
	  label: 'Consultor - Nome',
	  value: 'consultor.nome'
	},{
	  label: 'Consultor - Email',
	  value: 'consultor.email'
	}];
	
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
