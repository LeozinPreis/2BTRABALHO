function calcularArea() {
  var largura = parseFloat(document.getElementById('largura').value);
  var comprimento = parseFloat(document.getElementById('comprimento').value);

  var area = largura * comprimento;

  document.getElementById('area-resultado').innerHTML = "Área do terreno: " + area.toFixed(2) + " metros quadrados";
}






function calcularFerraduras() {
  var quantidadeCavalos = parseInt(document.getElementById('quantidade-cavalos').value);

  var quantidadeFerraduras = quantidadeCavalos * 4;

  document.getElementById('ferraduras-resultado').innerHTML = "Quantidade de ferraduras necessárias: " + quantidadeFerraduras;
}





function calcularArrecadacao() {
  var quantidadePaes = parseInt(document.getElementById('quantidade-paes').value);
  var quantidadeBroas = parseInt(document.getElementById('quantidade-broas').value);

  var valorPaes = quantidadePaes * 0.12;
  var valorBroas = quantidadeBroas * 1.5;
  var totalArrecadado = valorPaes + valorBroas;
  var poupanca = totalArrecadado * 0.1;

  document.getElementById('arrecadacao-resultado').innerHTML = "Total arrecadado: R$ " + totalArrecadado.toFixed(2);
  document.getElementById('poupanca-resultado').innerHTML = "Valor para poupança: R$ " + poupanca.toFixed(2);
}




function calcularDiasVida() {
            var nome = document.getElementById('nome').value;
            var idade = parseInt(document.getElementById('idade').value);
            var diasVida = idade * 365;

            document.getElementById('dias-vida-resultado').innerHTML = nome + ", você já viveu " + diasVida + " dias";
          }






function calcularLitros() {
            var precoLitro = parseFloat(document.getElementById('preco-litro').value);
  var valorPagamento = parseFloat(document.getElementById('valor-pagamento').value);

            var litros = valorPagamento / precoLitro;

  document.getElementById('litros-resultado').innerHTML = "Litros colocados no tanque: " + litros.toFixed(2);
}





function calcularValor() {
  var pesoPrato = parseFloat(document.getElementById('peso-prato').value);
  var valorPagar = pesoPrato * 12;

  document.getElementById('valor-resultado').innerHTML = "Valor a pagar: R$ " + valorPagar.toFixed(2);
}

function calcularDiasPassados() {
  var dia = parseInt(document.getElementById('dia').value);
  var mes = parseInt(document.getElementById('mes').value);

  var diasPassados = (mes - 1) * 30 + dia;

  document.getElementById('dias-passados-resultado').innerHTML = "Dias passados desde o início do ano: " + diasPassados;
}






function calcularValorArrecadado() {
              var quantidadePequenas = parseInt(document.getElementById('quantidade-pequenas').value);
              var quantidadeMedias = parseInt(document.getElementById('quantidade-medias').value);
              var quantidadeGrandes = parseInt(document.getElementById('quantidade-grandes').value);

         var valorPequenas = quantidadePequenas * 10;
     var valorMedias = quantidadeMedias * 12;
   var valorGrandes = quantidadeGrandes * 15;

         var valorArrecadado = valorPequenas + valorMedias + valorGrandes;

  document.getElementById('valor-arrecadado-resultado').innerHTML = "Valor arrecadado: R$ " + valorArrecadado.toFixed(2);
}
  // a partir daqui é alguma coisa sla


  function calcularArea() {
    var largura = document.getElementById("largura").value;
    var comprimento = document.getElementById("comprimento").value;

    var area = largura * comprimento;

    document.getElementById("area-resultado").innerHTML = "A área do terreno é: " + area + " metros quadrados.";
  }

  function calcularFerraduras() {
    var quantidadeCavalos = document.getElementById("quantidade-cavalos").value;

    var quantidadeFerraduras = quantidadeCavalos * 4;

    document.getElementById("ferraduras-resultado").innerHTML = "Serão necessárias " + quantidadeFerraduras + " ferraduras para equipar os cavalos.";
  }




  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA


    // Função para calcular as vendas na padaria
    function calcularVendas() {
      var quantidadePaes = document.getElementById("quantidade-paes").value;
      var quantidadeBroas = document.getElementById("quantidade-broas").value;

      var totalVendas = (quantidadePaes * 0.12) + (quantidadeBroas * 1.5);
      var poupanca = totalVendas * 0.1;

      document.getElementById("vendas-resultado").innerHTML = "Total arrecadado: R$ " + totalVendas.toFixed(2);
      document.getElementById("poupanca-resultado").innerHTML = "Valor a guardar na poupança: R$ " + poupanca.toFixed(2);
    }

    // Função para calcular os dias de vida
    function calcularDiasVida() {
      var nome = document.getElementById("nome").value;
      var idade = document.getElementById("idade").value;

      var diasVida = idade * 365;

      document.getElementById("dias-vida-resultado").innerHTML = nome + ", você já viveu " + diasVida + " dias.";
    }

    // Função para calcular os litros de gasolina
    function calcularLitrosGasolina() {
      var precoGasolina = document.getElementById("preco-gasolina").value;
      var valorPagamento = document.getElementById("valor-pagamento").value;

      var litrosGasolina = valorPagamento / precoGasolina;

      document.getElementById("litros-resultado").innerHTML = "Litros de gasolina: " + litrosGasolina.toFixed(2);
    }

    // NAO TO ENTENDENDO MAIS NADAAAAAAAAAAAAAAAAAAAA AGORA VAI SÉRIO

    // Função para calcular o valor da refeição
function calcularValorRefeicao() {
  var pesoPrato = document.getElementById("peso-prato").value;

  var valorRefeicao = pesoPrato * 12;

  document.getElementById("valor-refeicao-resultado").innerHTML = "Valor a pagar: R$ " + valorRefeicao.toFixed(2);
}

