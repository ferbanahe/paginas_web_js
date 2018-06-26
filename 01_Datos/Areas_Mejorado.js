function calcularCirculo(radio) {
    return Math.PI*radio*radio
}

function calcularCircunf(radio) {
    return Math.PI*radio*2
}

function mostrarCirculo(radio, circulo) {
    /*let mensaje = 'El area del círculo de radio '
    mensaje += radio
    mensaje += +' es '
    mensaje += + circulo*/
    let mensaje = `
    Resultado:
    El area del círculo del radio ${radio} es ${circulo}`
    console.log(mensaje)
}

function mostrarCircunf(radio, circunf) {
    let mensaje = `
    Resultado:
    La circunferencia del círculo de radio ${radio} es ${circunf}`
    console.log(mensaje)
}

function main() {
    let radio = 3
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
    radio = 7
    mostrarCirculo(radio, calcularCirculo(radio))
}

main()