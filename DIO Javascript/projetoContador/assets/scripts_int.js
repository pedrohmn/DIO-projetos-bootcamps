var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
var adc = document.getElementById("somar")
var dec = document.getElementById("diminuir")

document.addEventListener("click", checkNegative)
adc.addEventListener("click", increment)
dec.addEventListener("click", decrement)

function checkNegative (){
	if (currentNumber <0){
		currentNumberWrapper.style.color = "red"
	}else{
		currentNumberWrapper.style.color = "black"}
}

function increment(){
	currentNumber += 1
	currentNumberWrapper.innerHTML = currentNumber
}

function decrement(){
	currentNumber -= 1
	currentNumberWrapper.innerHTML = currentNumber
}