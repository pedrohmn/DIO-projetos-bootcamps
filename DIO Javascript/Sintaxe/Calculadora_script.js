function calculadora(){
	const operacao = Number (prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'))

entradasValidas = [1,2,3,4,5,6]
if (entradasValidas.indexOf(operacao) > -1 ) {
	let n1 = Number (prompt ("Insira o primeiro valor: "))
	let n2 = Number (prompt ("Insira o segundo valor: "))
	let resultado

function soma () {resultado = n1 + n2
	alert (`${n1} + ${n2} = ${resultado}`)}
function subtracao () {resultado = n1 - n2
	alert (`${n1} - ${n2} = ${resultado}`)}
function multiplicacao () {resultado = n1 * n2
	alert (`${n1} * ${n2} = ${resultado}`)}
function divReal () {resultado = n1 / n2
	alert (`${n1} / ${n2} = ${resultado}`)}
function divInteira () {resultado = n1 % n2
	alert (` O resto da divisão de ${n1} por ${n2} é ${resultado}`)}
function potencia () {resultado = n1 ** n2
	alert (`${n1} ** ${n2} = ${resultado}`)}

function repeticao () {
	let acao = prompt ("Deseja fazer uma nova operação?\n1 - Sim\n2 - Não")
	if (acao == 1){calculadora()}
	else if (acao == 2) {alert("Até logo!")}
	else {alert("Digite uma opção válida")
		repeticao()}
}

if (operacao == 1) {soma()}
else if (operacao == 2) {subtracao()}
else if (operacao == 3) {multiplicacao()}
else if (operacao == 4) {divReal()}
else if (operacao == 5) {divInteira()}
else if (operacao == 6) {potencia()}

repeticao()}
else {alert("Operação Inválida!\nDigite o número correspondente à operação desejada.")
	calculadora()}


} calculadora ()