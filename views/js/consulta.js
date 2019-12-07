/*
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

var dadosPaciente = {
    nome: getDadosPaciente("nome"),
    cpf: getDadosPaciente("cpf"),
    dataNasc: getDadosPaciente("dtNasc")
}

document.getElementById("nomePaciente").innerHTML = dadosPaciente.nome;
document.getElementById("cpfPaciente").innerHTML = dadosPaciente.cpf;
document.getElementById("inputNome").innerHTML = dadosPaciente.nome;
document.getElementById("inputCpf").innerHTML = dadosPaciente.cpf;
document.getElementById("inputDtNasc").innerHTML = dadosPaciente.dataNasc;

function getDadosPaciente(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        console.log("getDadosPaciente")
        console.log(param_value.toString())

        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}
*/
function deleteReceita (ids) {
    alert(ids);
    const xhttp = new XMLHttpRequest();
    idsArray = ids.split(",");
    const url = "/ExcluirReceita?pacienteId=" + idsArray[0] + "&medicacoId=" + idsArray[1];
    console.log(url);
    xhttp.open("DELETE", url);
    xhttp.send();
}