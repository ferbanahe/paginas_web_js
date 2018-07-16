// OBJETOS

function algo(x) {}

let o = {
    o1: {}
}

algo(o)
algo({})

// FUNCIONES

function otra(x) {
    let f = x()
}

let o = function () {
    let o1 = function () {}
}

algo(o)
otra(function () {})

// Formas de crear funciones


// Declaracion
function suma1(a,b) {
    return a+b
}

// Asignación
let suma2 = function (a,b) {
    return a+b
} 

// ES6 Funciones Arrow o Lambdas si está con una sola línea se puede suprimir llaves y return. Se usan para crear funciones anónimas callback.
let suma3 = (a,b) => {return a+b}
let suma3b = (a,b) => a+b

let cuadrado = a => a*a


let z = suma1(5,6)
console.log(z);
console.log(suma2(5,6));