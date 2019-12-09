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
    let xhttp = new XMLHttpRequest();
    idsArray = ids.split(",");
    let url = "/ExcluirReceita?pacienteId=" + idsArray[0] + "&medicacoId=" + idsArray[1];
    xhttp.open("DELETE", url);
    xhttp.send();
    let elemento = ""+idsArray[0]+idsArray[1]
    console.log(elemento);
    document.getElementById(elemento).remove();
}

function iniciarEdicao(medicacoId){
    document.getElementById("medicacoId").value = medicacoId;
    let linhas = document.getElementById(medicacoId);
    let formButton = document.getElementById("formButton");
    let classe = document.getElementsByName("classeTerapeutica")[0];
    let via = document.getElementsByName("viaAdministracao")[0];
    let unidade = document.getElementsByName("unidade")[0];
    
    classe.value = linhas.getElementsByClassName("classeTerapeutica")[0].innerHTML;
    classe.disabled = "disabled";

    via.value = linhas.getElementsByClassName("viaAdministracao")[0].innerHTML;
    via.disabled = "disabled";

    unidade.value = linhas.getElementsByClassName("unidade")[0].innerHTML;
    unidade.disabled = "disabled";

    document.getElementsByName("dosagem")[0].value = linhas.getElementsByClassName("dosagem")[0].innerHTML;   
    document.getElementsByName("frequencia")[0].value = linhas.getElementsByClassName("frequencia")[0].innerHTML;
    document.getElementsByName("duracao")[0].value = linhas.getElementsByClassName("duracao")[0].innerHTML;
    
    formButton.type = "button";
    formButton.innerHTML = "Salvar Edição";
    formButton.addEventListener("click", salvarEdicao, false);

}

function salvarEdicao(){
    console.log("entrou");
    let receita = {
        dosagem: document.getElementsByName("dosagem")[0].value,
        frequencia: document.getElementsByName("frequencia")[0].value,
        duracao: document.getElementsByName("duracao")[0].value,
        prescricao: document.getElementsByName("prescricao")[0].value
    };

    let jsonReceita = JSON.stringify(receita);
    let xhr = new XMLHttpRequest();

    let url = "/EditarReceita?pacienteId=" +document.getElementById("pacienteId").value + "&medicacoId=" + document.getElementById("medicacoId").value;
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(jsonReceita);
}