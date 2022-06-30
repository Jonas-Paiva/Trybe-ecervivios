// ================================Parte II - Funções=====================================

// Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(palavra) {
	let palavraArray = palavra.split('').reverse();
    let reverso = palavraArray.join('');
	resultado = '';
	if (palavra === reverso) {
		resultado = true;
	} else {
		resultado = false;
	}
	return console.log(resultado);
}

verificaPalindrome('desenvolvimento');
verificaPalindrome('arara');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let teste = [2, 3, 6, 7, 10, 1];
// Valor esperado no retorno da função: 4.
 


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let teste2= ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra(array) {
	let maior = 0;
	let palavra = '';
	for (const iterator of array) {
		if (iterator.length > maior) {
			maior = iterator.length;
			palavra = iterator;
		}
	}
	return console.log(
		` A maior palavra do array é ${palavra} com ${maior} caracteres.`
	);
}
maiorPalavra(teste2);



// Valor esperado no retorno da função: Fernanda.
// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.



// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.



// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

