function basica(x) {}
let y
basica(y)




function miFuncion(...z) {
    console.log('Hola ' + z[0])
    console.log('Hola ' + arguments[0])
}

let x = 21
miFuncion(x)
// miFuncion(x,56)
// miFuncion(x, 56, 89)

/*EN OTROS LENGUAJES existe la sobrecarga de funciones métodos
function miFuncion(z) {
    //un código
}
function miFuncion(z,x) {
    //otro código
}
miFuncion(x)
miFuncion(x,w)*/