function sumar (a, b) {
    let resultado
    if (isNaN(a)) { resultado ='Error'}
    else if (isNaN(b)) { resultado = 'Error'}
    else {resultado = Number(a) + Number(b) //es un casting forzado por nosotros. Los casting son temporales durante la operación, después dejan de serlo. El resultado seria 6 de tipo number, al tener casting que es momentaneo.
        // resultado = a + String(b)
        // resultado2 = a + b // aquí será 24 y de tipo string, al no tener casting tambien se puede escribir así: resultado = +a +ab
        // resultado = parseFloat(a) + parseFloat(b)
    }
    return resultado
}

function restar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a - b
    } // el casting solo se usa en sumas en el resto de operaciones no hace falta, lo aplica automáticamente
    return resultado
}

function multiplicar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a * b
    } 
    return resultado
}

function dividir(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else if (b == 0) { resultado = 'No se puede dividir por cero'}
    else {
        resultado = a / b
    } 
    return resultado
}

function calcularModulo(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a % b
    } 
    return resultado
}

let num1 = '-2'
let num2 = 4.5
let resultado = sumar(num1, num2)
console.log(resultado)
resultado = restar(num1, num2)
console.log(resultado)
resultado = multiplicar(num1, num2)
console.log(resultado)
resultado = dividir(num1, num2)
console.log(resultado)
resultado = calcularModulo(num2, num1)
console.log(resultado)
// console.log(sumar(num1, num2))
