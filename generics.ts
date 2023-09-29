function mostrarDados <T> (array:T[]){
    array.forEach(element => {
        console.log(element)
    });
}

const A = [1,2,3,4]
mostrarDados(A);

const B = ['um', 'dois', 'três', 'quatro']
mostrarDados(B);



