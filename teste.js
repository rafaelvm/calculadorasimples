var primeirovalor = parseInt(prompt("Digite seu primeiro valor"))

var segundovalor = parseInt(prompt("Digite seu segundo valor"))

var operacao = prompt("Escolha uma operação: 1 para divisão, 2 para soma, 3 para subtração e 4 para multiplicação ")

if (operacao == 1){
  var resultado = primeirovalor / segundovalor
  document.write("<h2>" + primeirovalor + " / " + segundovalor + " = " + resultado + "</h2>")
  }

else if (operacao == 2){
    var resultado = primeirovalor + segundovalor
    document.write("<h2>" + primeirovalor + " + " + segundovalor + " = " + resultado + "</h2>")
  }

else if (operacao == 3){
    var resultado = primeirovalor - segundovalor
    document.write("<h2>" + primeirovalor + " - " + segundovalor + " = " + resultado + "</h2>")
}

else if (operacao == 4) {
    var resultado = primeirovalor * segundovalor
    document.write("<h2>" + primeirovalor + " * " + segundovalor + " = " + resultado + "</h2>")
  }

else {
  document.write("<h2>" + "Opção inválida" + "</h2>")
}
