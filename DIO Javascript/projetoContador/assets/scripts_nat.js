// Utilizando addEventListener() no lugar do onClick do HTML
// Apenas números naturais. Mudar estilo do botão '-' quando 0

var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
var adc = document.getElementById("somar")
var dec = document.getElementById("diminuir")

document.addEventListener("click", check0)
adc.addEventListener("click", increment)

function init(){
	dec.style.opacity = 0.3
} init()

function check0(){
	if (currentNumber <= 0) {
		dec.removeEventListener("click", decrement)
		dec.style.opacity = 0.3
	}else{
		dec.addEventListener("click", decrement)
		dec.style.opacity = 1
}}

function increment(){
	currentNumber += 1
	currentNumberWrapper.innerHTML = currentNumber
}

function decrement(){
	currentNumber -= 1
	currentNumberWrapper.innerHTML = currentNumber
}