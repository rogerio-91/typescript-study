// // dados primitivos 

// const texto:string ='Olá, mundo! ';
// const nome:string ='Bem-vindo, Bicho!';

// const num1:number = 6.5;
// const num2:number = 3;

// var boleano:boolean = false
// boleano = true

// var saudacao:string = texto + nome;
// var soma = num1 + num2

// console.log(saudacao);
// console.log(soma);
// console.log(boleano);

// Arrays e Tuplas 

// const pares:number[] = [ 2, 4, 6, 8, 10]

// const linguagens: readonly string[] = ['html', 'css', 'javascript', 'react']

// linguagens.push('typescript');
// linguagens.push('java');

// console.log(pares)
// console.log(linguagens)
// console.log(typeof(linguagens));

// var tupla:[string, number, boolean] = ['Developer Full-Stack', 5000, true];
// tupla.push('Developer Back-End');


// console.log(tupla);
// console.log(typeof(tupla));

// Objetos

// const user: {nome: string, email:string, senha:number} = {
//     nome: 'Rogério',
//     email: 'rogerio@roger.com',
//     senha: 123456
// };

// user.nome = 'Rogério Júnior'

// console.log(user.nome)
// console.log(typeof(user.nome));

// Type Alias e Interface

type Usuario = {
    name: string,
    email: string,
    password?: number
}

const user:Usuario = {
    name: 'Rogério',
    email: 'rogerio@boeing.com',
    password: 12345
}

console.log(user.password)

// Any , union type

var x: any 

x = 7
console.log(x);

x = 'Ola!'

console.log(x);

type typeId = string | number | boolean

var y: unknown

y = 8
console.log(y);

y = 'Mundo!'
console.log(y);

y= true
console.log(y);

// enum

enum Tamanho {
    P = 'Pequena',
    M = 'Média',
    G = 'Grande'
}

const Camiseta = {
    nome: 'Camisa Branca',
    tamanho: Tamanho.M
};

console.log(Camiseta.tamanho);


