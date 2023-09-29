"use strict";
class Aluno {
    constructor(id, nome, certificados) {
        this.id = id;
        this.nome = nome;
        this.certificados = certificados;
    }
    novoCertificado() {
        this.certificados = this.certificados + 1;
        return this.certificados;
    }
    ;
}
const Aluno1 = new Aluno(1, 'Jorge', 2);
const Aluno2 = new Aluno(2, 'Jesus', 3);
Aluno1.novoCertificado();
Aluno2.novoCertificado();
console.log(Aluno1);
console.log(Aluno2);
