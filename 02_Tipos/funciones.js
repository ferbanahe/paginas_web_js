let number1 = 2 
let number2 = 3 //son dos variables que se guardan en los parámetro, los nombres de la variables no tienen porque coincidir con el de los parámetros.
console.log(sumar(number1,number2)) 

let rate = 0.3
console.log(renta(10000, 3, rate))

console.log(renta(30000, 3, 0.35))

function sumar(num1, num2) { // calcula los parámetros num1 y num2
    return num1 + num2
}
function renta (c, i, t) {
    return c * i * t
}


