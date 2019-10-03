function atualizaData() {
  // Obtém a data/hora atual
  var data = new Date();

  // Guarda cada pedaço em uma variável
  var dia = data.getDate(); // 1-31
  var mes = data.getMonth() + 1; // 0-11 (zero=janeiro)
  var ano = data.getFullYear(); // 4 digitos
  var dia_sem = data.getDay(); // 0-6 (zero=domingo)
  var dias = new Array(
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  );

  // Formata a data e a hora (note o mês + 1)

  if (dia < 10) {
    dia = "0" + dia;
  }

  if (mes < 10) {
    mes = "0" + mes;
  }

  str_data = dias[dia_sem] + ", " + dia + "/" + mes + "/" + ano;

  document.getElementById("lblData").innerHTML = str_data;
}

jQuery(window).load(function($) {
  atualizaData();
});

function show(element) {
  $(element).show(800);
}

function hide(element) {
  $(element).hide(800);
}

/* Função para preencher o endereço automaticamente, com base no CEP */

$("#cep").blur(function() {
  //Início do Comando AJAX
  $.ajax({
    //O campo URL diz o caminho de onde virá os dados
    //É importante concatenar o valor digitado no CEP
    url: "https://viacep.com.br/ws/" + $(this).val() + "/json/?callback=?",

    //Aqui você deve preencher o tipo de dados que será lido,
    //no caso, estamos lendo JSON.
    dataType: "json",
    //SUCESS é referente a função que será executada caso
    //ele consiga ler a fonte de dados com sucesso.
    //O parâmetro dentro da função se refere ao nome da variável
    //que você vai dar para ler esse objeto.
    success: function(resposta) {
      //Agora basta definir os valores que você deseja preencher
      //automaticamente nos campos acima.
      $("#logradouro").val(resposta.logradouro);
      $("#complemento").val(resposta.complemento);
      $("#bairro").val(resposta.bairro);
      $("#cidade").val(resposta.localidade);
      $("#uf").val(resposta.uf);
      console.log(resposta);
      //Vamos incluir para que o Número seja focado automaticamente
      //melhorando a experiência do usuário
      $("#numero").focus();
    }
  });
});

/* Função para validar o CPF */
function testaCpf() {
  var strCPF = $("#inputcpf").val();
  TestaCPF(strCPF);
}

function TestaCPF(strCPF) {
  var Soma;
  var Resto;

  Soma = 0;
  if (strCPF == "00000000000") {
    return mudarBorda();
  }

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) {
    return mudarBorda();
  }

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;

  if (Resto != parseInt(strCPF.substring(10, 11))) {
    return mudarBorda();
  }

  return "CPF válido";
}

function mudarBorda() {
  $("#inputcpf").addClass("border-danger");
  $("#inputcpf").focus();
  show(erroCpf);
}

function cursor(outros) {
  $(outros).focus();
}
