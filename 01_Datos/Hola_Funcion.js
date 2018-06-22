/*JavaScript es de Oracle ->ECMAScript es su nombre oficial->ES6/ ES2015 es la actual versión
/**crear funcion, saludar es el nombre, user es el parámetro. user cambiaría y var  se puede sustituir por const  si es un valor constante y pueden llamarse en mayuscula. El parámetro puede llevar una p y comenzar con mayúscula, pero no es obligatorio */

// variable global al estar fuera de una función. Son independientes para el sistema let global y let local-> hiting
// let autor = 'Fernando' no es aconsejable por ser global


function saludar(pUser) {
    const SALUDO = 'Hola'
    console.log(SALUDO, pUser)
    //variable local a la función
    let autor = 'Alberto'
    console.log('Dentro', autor)
}

function sumar(a,b) {
    let resultado = a + b
    console.log(resultado)
}

function dividir (a,b) {
    let resultado
    if (b != 0) {
         resultado = a / b 
    } else {
        resultado = 'No se puede dividir por 0'
    }
    console.log(resultado)
}


/**invocar función */
saludar('Pepe')
saludar('Elena')
sumar(2,4)
dividir(4,0)


// console.log('Fuera', autor) no ea aconsejable al ser global
