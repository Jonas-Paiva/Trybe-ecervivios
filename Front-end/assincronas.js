// Vamos botar tudo isso em prática com este exercício de fixação:
// 1 - Adicione uma callback e trate o erro retornado.
// A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.
// Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry;
// Retorne essa callback na função getCountry de forma que trate a mensagem de erro.

// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, offSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      // insira uma `callback` como retorno da função em caso de erro
      offSuccess(errorMessage);
    }
  }, delay());
};

// Deve imprimir:
//  - Em caso de sucesso: "O país retornado é Brasil"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryName, printErrorMessage);

// Deve imprimir:
//  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryCurrency, printErrorMessage);

let timeA = 1000;
let timeB = 500;
let numA = 4;
let numB = 6;
let numC = 2;

const sum = (a, b) => a + b;

setTimeout(() => {
  numC = sum(numA, numB);
  console.log(numC);
}, timeA);

console.log(numC);

setTimeout(() => {
  console.log(sum(numA, numC) === numB);
}, timeB);
