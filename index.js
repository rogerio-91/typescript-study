"use strict";
// // dados primitivos 
const user = {
    name: 'Rogério',
    email: 'rogerio@boeing.com',
    password: 12345
};
console.log(user.password);
// Any , union type
var x;
x = 7;
console.log(x);
x = 'Ola!';
console.log(x);
var y;
y = 8;
console.log(y);
y = 'Mundo!';
console.log(y);
y = true;
console.log(y);
// enum
var Tamanho;
(function (Tamanho) {
    Tamanho["P"] = "Pequena";
    Tamanho["M"] = "M\u00E9dia";
    Tamanho["G"] = "Grande";
})(Tamanho || (Tamanho = {}));
const Camiseta = {
    nome: 'Camisa Branca',
    tamanho: Tamanho.M
};
console.log(Camiseta.tamanho);
