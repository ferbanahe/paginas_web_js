/*Dos tipos de funciones y buena práctica es no hacer una función que calcule y muestre a la vez
    -Funciones puras, sin "side effects", efectos secundarios -> retornan datos ejemplo function suma, no se ve nada
    -Funciones con efectos ejemplo function mostrar, saca e pantalla lo que le dan
    -Función Main es un contenedor de todo lo que sobre, invoca otras funciones
*/

function sumar(a,b) {
    let resultado = a+b
    return resultado;
}
/* el parametro dato sirve para mostrar con cualquier nombre, en este caso dato, el lugar en que se guarda el valor dado en sumar*/
function mostrar(dato) {
    console.log(dato)
}

function main() {
    let resultado = sumar(2,5)
    mostrar(resultado)
    mostrar(sumar(45, 172354))
}

main() 