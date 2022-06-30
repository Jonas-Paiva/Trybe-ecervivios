
// ================== Exercício 1 ========================
//  Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = '';

// Escreva o código aqui ↓

menuServices = menu[1];

// ou

menuServices = menu.find((x) => x == 'Serviços');

console.log(menuServices);


// ================== Exercício 2 ========================
// Procure o índice do valor "Portfólio" do array menu:
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = '';

// Escreva o código aqui ↓

indexOfPortfolio = menu1.indexOf('Portfólio');

console.log(indexOfPortfolio);


// ================== Exercício 3 ========================
// Adicione o valor "Contato" no final do array menu:
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];

// Escreva o código aqui ↓
menu2.push('Contato');

console.log(menu2);


