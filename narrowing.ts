function Validador(CPF:number | string) {
    if(typeof(CPF) === 'number') {
        console.log('o dado precisa ser tratado')
    }else {
        console.log('o dado está ok!')
    }
};

const CPFA = '111.222.333-44';
const CPFB = 78988833300 ;

Validador(CPFA);
Validador(CPFB);