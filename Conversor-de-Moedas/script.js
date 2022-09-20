// função para conversão de reais para dolar
function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmDolar = valorNumerico * (0.19).toFixed(2);
  console.log(valorEmDolar);
  var valorEmReal = valorNumerico * (5).toFixed(2);

  var elementoConvertido = document.getElementById("valorConvertido");

  var valorConvertido =
    "o valor em dolar é $" +
    valorEmDolar +
    "  o valor em reais é R$" +
    valorEmReal;

  elementoConvertido.innerHTML = valorConvertido;
}
// função para conversão de reais para euros
function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  
  var valorNumericO = parseFloat(valor);

  var valorEmEuro = valorNumericO * (0,19).toFixed(2);

var valorEmReais = valorNumericO * (5.25).toFixed(2);
 
  console.log(valorEmReais);

  var elementoConvertido = document.getElementById("valorConvertiido");

  var valorConvertiido = ("o valor em Euro é €" + valorEmEuro + " e o valor em Reais é R$" + valorEmReais)             

  elementoConvertido.innerHTML = valorConvertiido;
}