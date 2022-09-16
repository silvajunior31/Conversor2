function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmIeneNumerico = parseFloat(valor);
  var valorEmBitcoin = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  var valorEmIene = valorEmIeneNumerico * 143.92;
  var valorDolarEmBitcoin = valorEmBitcoin * 0.000053;
  console.log(valorEmReal);
  console.log(valorEmIene);
  console.log(valorDolarEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var elementoValorConvertidoE = document.getElementById("valorConvertidoE");
  var elementoValorBitcoin = document.getElementById("valorBitcoin");
  var valorConvertido = "Real R$ " + valorEmReal;
  var valorConvertidoE = "Iene ¥ " + valorEmIene;
  var valorBitcoin = "Bitcoin do dólar " + valorDolarEmBitcoin;

  elementoValorConvertido.innerHTML = valorConvertido;
  elementoValorConvertidoE.innerHTML = valorConvertidoE;
  elementoValorBitcoin.innerHTML = valorBitcoin;
}