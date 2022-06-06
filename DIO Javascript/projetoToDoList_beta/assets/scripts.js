// Botão Adicionar novo item
var lista = []
var addItem = document.getElementById("add")
addItem.addEventListener("click", newItem)

function newItem(){
	var nuItem = document.getElementById("item")
	lista.push (nuItem)
}

// Checkbox
