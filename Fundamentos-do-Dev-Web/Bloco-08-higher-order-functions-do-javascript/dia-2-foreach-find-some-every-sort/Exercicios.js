const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// // Adicione o código do exercício aqui:

// //🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// //Dica: use a função find.
// const auroraNascida1947 = (arr) => arr.find((objeto) => objeto.author.birthYear === 1947);
// console.log(auroraNascida1947(books));


// // 2 - Retorne o nome do livro de menor nome.
// // Dica: use a função forEach.

// function smallerName(arr) {
//   let nameBook = '';
//   // escreva aqui o seu código
//   arr.forEach(element => {
//     if (nameBook.length === 0 || nameBook.length > element.name.length){
//       nameBook= element.name;
//     }
//   });
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }

// console.log(smallerName(books));

// // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// function getNamedBook(arr){
//   return arr.find((element)=> element.name.length === 26 );
// };

// console.log(getNamedBook(books))


// 4 - Ordene os livros por data de lançamento em ordem decrescente
function orderDate(array){
  const date = (array.map((Element)=> Element.releaseYear)).sort((a,b)=> a - b);
  const newOrder = array.filter((Element,index)=>{
    Element.releaseYear === date[index];
  })
  return newOrder;
}
console.log(orderDate(books));