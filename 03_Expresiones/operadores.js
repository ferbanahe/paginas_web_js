function incrmeentos () {
    let x = 23
let y
y = ++x //x= x+1 23 y luego y=x 24 es preincremento
y = x++ //y= x 24 y luego x= x+1 23 es postincremento
/* console.log(x++)
console.log(x) */
y =--x // x= x-1 y luego y=x
y = x-- // y=x y luego x= x-1
}

function asignaciones () {
    let x = 2
    x += 1 // x = x + 1
    x = 2
    x -= 1
    x = 2
    x *= 3
    x = 2
    x /= 2
    x = 2
    x %= 2
}

function esPar (num) {
    let isPar = true
    // compruebo si NO eres par
    // if (num % 2 != 0) {
    if (num % 2) {
        isPar = false
    } 
    return isPar
}

function esPar2 (num) {
    let isPar = false
    // compruebo si SI eres par
    if (num % 2 == 0) {
        isPar = true
    } 
    return isPar
}



// incrementos()
// asignaciones()

//console.log('22 es par?', esPar(22))
//console.log('25 es par?', esPar(25))

//falsy: son los elemntos que al hacer casting a boolean te devuelven false. 
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
//truly
console.log(Boolean(true))
console.log(Boolean(109))
console.log(Boolean('Pepe'))

let a = 'Juan'
let b = 0
if (b != 0) {
    a = 'Pepe'
}
console.log(a)
