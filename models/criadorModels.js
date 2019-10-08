class CriadorModelos{
	constructor(){}

	criarPaciente(body)	
	{
		var paciente = {
			nome: body.nome,
			cpf: body.cpf,
			dataNasc: body.dataNasc,
			natCidade: body.natCidade,
			natEstado: body.natEstado,
			natPais: body.natPais,
			cep: body.cep,
			telResidencial: body.telResidencial,
			telComercial: body.telComercial,
			telCelular: body.telCelular,
			telOutro: body.telOutro
		};
	}
	criarMedico()
	{

	}
	criarMedicamento()
	{

	}
	criarConsulta()
	{

	}
}

module.exports = CriadorModelos;