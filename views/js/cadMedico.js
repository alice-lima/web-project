function getInfoMedico(){
    let nome = document.getElementById("inputNome").value;
    let cpf = document.getElementById("cpf").value;
    let crm = document.getElementById("crm").value;
    let dtNascimento = document.getElementById("nascimento").value;
    let uf = document.getElementById("uf").value;
    let especialidade = document.getElementById("especialidade").value;
    let residencial = document.getElementById("residencial").value;
    let celular = document.getElementById("celular").value;
    let outro = document.getElementById("outro").value;

    const Medico = {
        nome,
        cpf,
        crm,
        dtNascimento,
        uf,
        especialidade,
        residencial,
        celular,
        outro
    }
    
    return Medico;
}

/* Função para validar o CPF */

function validaCpf(){
    let cpf = document.getElementById("cpf").value;
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
        $("#cpf").removeClass("border-danger");        
        $("#cpf").addClass("border-success");
        $("#mensagem").addClass("sucesso");        
        $("#mensagem").removeClass("erro");
        document.getElementById("mensagem").innerHTML = "CPF Válido"
    } 
    else {
        $("#cpf").addClass("border-danger");        
        $("#cpf").removeClass("border-success");
        $("#mensagem").addClass("erro");        
        $("#mensagem").removeClass("sucesso")
        document.getElementById("mensagem").innerHTML = "CPF Inválido"
        $("#cpf").focus();
    }

}
  
function cursor(outros) {
    $(outros).focus();
}

function salvarMedico(){
    let medico = getInfoMedico();

    inserirLinha(medico);
    document.getElementById("formCad").submit();
}

function inserirLinha(medico){
    let tabela = document.getElementById("cadastroMedico");
    var numLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numLinhas);
    var cell0 = linha.insertCell(0);
    var cell1 = linha.insertCell(1);
    var cell2 = linha.insertCell(2);
    var cell3 = linha.insertCell(3);
    var cell4 = linha.insertCell(4);
    var cell5 = linha.insertCell(5);
    var cell6 = linha.insertCell(6);
    var cell7 = linha.insertCell(7);
    var cell8 = linha.insertCell(8);
    cell0.innerHTML = medico.nome;
    cell1.innerHTML = medico.dtNascimento;
    cell2.innerHTML = medico.cpf;
    cell3.innerHTML = medico.crm;
    cell4.innerHTML = medico.uf;
    cell5.innerHTML = medico.especialidade;
    cell6.innerHTML = medico.residencial;
    cell7.innerHTML = medico.celular;
    cell8.innerHTML = medico.outro;

}

function validaSenha() {
  let senha = document.getElementById("senha").value;
  let confSenha = document.getElementById("senhaConf").value;
  let button = document.getElementById("btnSalvar");

  if(senha !== confSenha) {
    button.disabled = true;
  }
  else {
    button.disabled = false;
  }
}
