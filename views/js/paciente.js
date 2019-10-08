function getInfoPaciente() {
    let nome = document.getElementById("inputNome").value;
    let cpf = document.getElementById("inputcpf").value;
    let dtNascimento = document.getElementById("nascimento").value;
    let cidadeNasc = document.getElementById("cidadeNasc").value;
    let ufNasc = document.getElementById("ufNascimento").value;
    let paisNasc = document.getElementById("paisNasc").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;
    let logradouro = document.getElementById("logradouro").value;
    let complemento = document.getElementById("complemento").value;
    let numero = document.getElementById("numero").value;
    let residencial = document.getElementById("residencial").value;
    let comercial = document.getElementById("comercial").value;
    let celular = document.getElementById("celular").value;
    let outro = document.getElementById("outro").value;

    const paciente = {
        nome,
        cpf,
        dtNascimento,
        cidadeNasc,
        ufNasc,
        paisNasc,
        cep,
        cidade,
        uf,
        logradouro,
        complemento,
        numero,
        residencial,
        comercial,
        celular,
        outro
    }

    return paciente;
}

/* Função para validar o CPF */

function validaCpf(){
    let cpf = document.getElementById("inputcpf").value;
    let cpfValido = TestaCPF(cpf);

    mudarBorda(cpfValido);

    console.log(cpfValido);
}
 
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
  
    Soma = 0;
    if (strCPF == "00000000000") {
      return false;
    }
  
    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) {
      return false;
    }
  
    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
  
    if (Resto != parseInt(strCPF.substring(10, 11))) {
      return false;
    }
  
    return true;
}
  
function mudarBorda(resposta) {
    if(resposta){
        $("#inputcpf").removeClass("border-danger");        
        $("#inputcpf").addClass("border-success");
        $("#mensagem").addClass("sucesso");        
        $("#mensagem").removeClass("erro");
        document.getElementById("mensagem").innerHTML = "CPF Válido"
    } 
    else {
        $("#inputcpf").addClass("border-danger");        
        $("#inputcpf").removeClass("border-success");
        $("#mensagem").addClass("erro");        
        $("#mensagem").removeClass("sucesso")
        document.getElementById("mensagem").innerHTML = "CPF Inválido"
        $("#inputcpf").focus();
    }

}
  
function cursor(outros) {
    $(outros).focus();
}

function submitForm(){
    let paciente = getInfoPaciente();
}

