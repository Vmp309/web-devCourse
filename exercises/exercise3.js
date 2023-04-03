//Escolhe a operação:

var tipo_opera = prompt("Escolha a operação: 1 - Adição 2- Subtração 3 - Divisão 4 - Multiplicação")

var num1 = prompt("Digite o primeiro número:")
var num2 = prompt("Digite o segundo número:")
var resultado;

switch (tipo_opera) {
  case "1":
    resultado = parseInt(num1) + parseInt(num2);
    break;
  
  case "2":
    resultado = parseInt(num1) - parseInt(num2);
    break;
  
  case "3":
    resultado = parseInt(num1) / parseInt(num2);
    break;

  case "4":
    resultado = parseInt(num1) * parseInt(num2);
    break;

  
  default:
    alert("Algo deu errado")
    break;
}

alert("Resultado: " + resultado)