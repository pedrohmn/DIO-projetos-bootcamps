// Criar função que receba dois números como parâmetros
function atividade(num1, num2){
	let num1 = Number (prompt ("Insira o primeiro valor: "))
	let num2 = Number (prompt ("Insira o segundo valor: "))

	// Conferir se os números são iguais
	num1 == num2 ? igualdade = "são iguais" : igualdade = "não são iguais"

	// Conferir se a soma dos números é maior que 10 ou menor que 20
	let ref10, ref20, soma
	soma = num1 + num2
	soma < 10 ? ref10 = "menor" : ref10 = "maior"
	soma < 20 ? ref20 = "menor" : ref20 = "maior"

	// Retornar uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20"
	alert (`Os números ${num1} e ${num2} ${igualdade}. Sua soma é ${soma}, que é ${ref10} que 10 e ${ref20} que 20.`)

}

atividade()