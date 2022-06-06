// Crie uma função que recebe o array alunos e um número que irá representar a média final;
function alunosAprovados (arr, media){
// Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
	let arrAprovados = []
	for (let i=0; i<arr.length; i++){
		const {nome, nota} = arr[1]
		if (nota>=media){arrAprovados.push (nome)}
	}
}console.log(alunosAprovados(alunos, 5))
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.