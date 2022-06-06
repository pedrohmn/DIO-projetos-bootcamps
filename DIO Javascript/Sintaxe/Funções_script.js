console.log("Funções declarativas") // Nome é necessário
function funcaoD () {
	console.log("Uma mensagem de função declarativa")
}
funcaoD("Tudo certo", "jovem")
console.log ("")

console.log ("Expressões de funções") // Nome é opcional
var ExpFuncao = function () {
	console.log("Resultado de uma função de expressão")
}
ExpFuncao ()
console.log("")

console.log ("Arrow function") // Nome é proibido
var Afuncao = () => {
	console.log("Retorno da Arrow function")
}
Afuncao ()