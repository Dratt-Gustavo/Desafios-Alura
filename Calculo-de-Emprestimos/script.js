// informações do Emprestimo
  var nome = prompt('Qual o seu nome?')
  var valorDoEmprestimo= parseFloat(prompt('Qual o valor do emprestimo?'));
  var parcelas =parseFloat (prompt('O emprestimo será pago em quantas parcelas?'));
  var juros = parseInt (prompt(' Qual a % de juros do seu emprestimo? '));
  
  // Cálculos
  
  var valorJuros= (valorDoEmprestimo * juros) / 100;
 
 var vParcelas = (valorJuros  +  valorDoEmprestimo) / parcelas;
  var Pfix = vParcelas.toFixed(2)
  
 var valorTotal = valorDoEmprestimo + valorJuros;
  var Vtfix = valorTotal.toFixed(2)
  
  
  
  

  // console
 
  console.log ('bem vindo ' + nome)
  
console.log ('o valor total com juros é ' + Vtfix + 'R$');
  
  console.log ('o valor das parcelas com Juros de ' + juros + "% é igual a " + Pfix + 'R$');
  
  console.log('muito obrigado ' + nome);