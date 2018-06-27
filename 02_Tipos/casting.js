/*Number convierte un string numérico en numérico*/
function operar() {
    let num1 = '22'
    console.log(num1, typeof num1)
    let num2 = '2'
    console.log(num2, typeof num2)
    let resultado = num1 * num2
    // resultado = Number(num1) * Number(num2)
    console.log(resultado, typeof resultado)
}

function operarCadenas() {
    let num1 = 'Hola'
    console.log(num1, typeof num1)
    console.log(isNaN(num1))
    let num2 = 'Pepe'
    console.log(num2, typeof num2)
    console.log(isNaN(num2))
    let resultado = num1 * num2
    // resultado = Number(num1) * Number(num2)
    console.log(resultado, typeof resultado)
    console.log(isNaN(resultado)) //la función isNaN cresponde si Nan es false o true
}

function sumar() {
    let num1 = '22'
    console.log(num1, typeof num1)
    let num2 = 2
    console.log(num2, typeof num2)
    let resultado = num1 + num2
    // resultado = num1 + String(num2)
    console.log(resultado, typeof resultado)
    }
       

// NaN 0/0
// Infinity

// + puede ser un valor por orden positivo/ concatenación/ suma; *, -, / solo multiplican, reatan o dividen. Para concatenar basta conque un solo elemento sea string. Si todos son number suma, no concatena.

// operarCadenas()
sumar()