class Aluno {
    id:number;
    nome:string;
    certificados:number;

    constructor(id:number, nome:string, certificados:number) {
        this.id = id;
        this.nome = nome;
        this.certificados = certificados;
    }

    novoCertificado():number{
        this.certificados = this.certificados +1
        return this.certificados 
    };

}

const Aluno1 = new Aluno(1, 'Jorge', 2);
const Aluno2 = new Aluno(2, 'Jesus', 3);
Aluno1.novoCertificado();
Aluno2.novoCertificado();


console.log(Aluno1);
console.log(Aluno2);
