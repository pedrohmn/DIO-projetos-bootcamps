// -----------------------------------------
// Sejam os arrays e objetos abaixo
var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
var object = {propriedade1: 'value1', propriedade2: 'value2', propriedade3: 'value3', };

// -----------------------------------------
// Laço FOR
console.log("Laço de repetição For")
// for([expressãoInicial];[condição];[incremento])
// {declaração}
for (let indice = 0; indice < array.length; indice++){
	console.log(indice);
}

console.log(" ")
// -----------------------------------------
// Laço FOR/IN ('i' será aonde acho/como acesso o item, como índice ou primeiro termo do objeto)
console.log("Laço de repetição For/in")
// for([indice] in [objeto ou array])
// {declaração}
console.log(">> Para Array:") // (pega apenas a quantidade de itens)
for (let i in array) {
	console.log(i)}
console.log(">> Para Objeto:") // (pega o primeiro termo do objeto)
for (i in object) {
	console.log(i)
}

console.log(" ")
// -----------------------------------------
// Laço FOR/OF (imprime valores)
console.log("Laço de repetição For/of")
// for ([indice] of [array])
// {declaração}
console.log(">> Para Array:") // (
for (i of array) {
	console.log(i)
}
console.log(">> Para Objeto:") // (Não é tão bom de usar, imprime uma letra por linha)
for (i of object.propriedade1){
	console.log(i)
}

console.log(" ")
// -----------------------------------------
// Laço WHILE (verificação da condição antes da iteração)
console.log("Laço de repetição While")
var a = 0
while (a < 10)
{a++
console.log (a)}


console.log(" ")
// -----------------------------------------
// Laço DO/WHILE (verificação da condição depois da iteração)
console.log("Laço de repetição Do/While")
a = 0
do {
	a++
	console.log(a)
} while (a < 10)