// ============================= Exercícios =================================

//1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
const a = 5;
const b = 2;

// Adição (a + b)
console.log(a + b);

// Subtração (a - b)
console.log(a - b);

// Multiplicação (a * b)
console.log(a * b);

// Divisão (a / b)
console.log(a / b);

// Módulo (a % b)
console.log(a % b);

//2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
let maior = a > b ? console.log(a) : console.log(b);

//3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

//4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let n = -1;
let PosNegaZero = n > 0 ? 'positive' : n < 0 ? 'negativo' : 'zero';
console.log(PosNegaZero);

//5 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
function trueTriangulo(a, b, c) {
	if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
		console.log('Triângulo True');
	} else {
		console.log('Triângulo False');
	}
}
trueTriangulo(90, 45, 45);

//6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
function movimentos(pecas) {
	switch (pecas.toLowerCase()) {
		case 'bispo':
			console.log('Em diagonal');
			break;
		case 'torre':
			console.log('Em cruz');
			break;
		case 'rei':
			console.log('Pode ir para todos lodos somente 1 casa');
			break;
		case 'cavalo':
			console.log('Em L');
			break;
	}
}
movimentos('cavAlo');

//7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
function avaliação(nota, notaMaxima) {
	let porcentagem = (nota * 100) / notaMaxima;
	let resultado = '';
	if (porcentagem >= 90) {
		resultado = 'A';
	} else if (porcentagem >= 80) {
		resultado = 'B';
	} else if (porcentagem >= 70) {
		resultado = 'C';
	} else if (porcentagem >= 60) {
		resultado = 'D';
	} else if (porcentagem >= 50) {
		resultado = 'E';
	} else if (porcentagem < 50) {
		resultado = 'F';
	} else if (porcentagem > 100 || porcentagem <= 0) {
		resultado = 'ERRO';
	}
	return console.log(
		`A nota é ${resultado}, de ${notaMaxima} o aluno acertou ${nota}, acertou ${porcentagem}%.`
	);
}
avaliação(4, 1000);

//8 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
let Num = [2, 3, 2345, 23, 45, 57, 46, 3, 2, 4512, 345, 234, 535];

function par(a) {
	for (const iterator of a) {
		if (iterator % 2 === 0) {
			console.log(`O número ${iterator} é par : True.`);
		} else {
			console.log(`O número ${iterator} é impar : false.`);
		}
	}
}

par(Num);