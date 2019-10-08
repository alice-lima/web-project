function getInfoRetorno(){
    let nome = document.getElementById("inputMedico").value;
    let especialidade = document.getElementById("tipo").value;
    let crm = document.getElementById("inputCrm").value;
    let retorno = document.getElementById("inputRetorno").value;
    let horario = document.getElementById("inputHorario").value;

    const Retorno = {
        nome, 
        especialidade,
        crm,
        retorno,
        horario
    }

    return Retorno;

}

function agendar(){
    let retorno = getInfoRetorno();

    document.getElementById("medico").innerHTML = retorno.nome;
    document.getElementById("especialidade").innerHTML = retorno.especialidade;
    document.getElementById("crm").innerHTML = retorno.crm;
    document.getElementById("dataConsulta").innerHTML = retorno.retorno;
    document.getElementById("horaConsulta").innerHTML = retorno.horario;

    let openModal = document.getElementById("openModal")
    openModal.style.display = "block";
    let element = document.getElementById("optRetorno")
    element.style.justifyContent = "space-between";
}