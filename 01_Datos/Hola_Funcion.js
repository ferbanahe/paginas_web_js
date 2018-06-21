/*JavaScript es de Oracle ->ECMAScript es su nombre oficial->ES6/ ES2015 es la actual versión
/**crear funcion, saludar es el nombre, user es el parámetro. user cambiaría y var  se puede sustituir por const  si es un valor constante y pueden llamarse en mayuscula. El parámetro puede llevar una p u comenzar con mayúscula, pero no es obligatorio */
function saludar(pUser) {
    const SALUDO = 'Hola'
    console.log(SALUDO, pUser)
}
/**invocar función */
saludar('Pepe')
saludar('Elena')

function sumar(a,b) {
    let resultado = a + b
    console.log(resultado)
}
sumar(2,4)

