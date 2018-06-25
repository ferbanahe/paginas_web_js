/*VARIABLES GLOBALES*/

// var global = 12
// let global = 12
// global = 12

function calcular (pDato) {
    // si se inicializa una variable SIN DECLARAR (sin VAR O LET)
    // dentro de una función
    //se crea como variable global
    global = 12
    global = global + pDato
    // global += pDato es otra forma de escribirlo y se llama de autoimplemento
    return global;
}

console.log(calcular(10)) // 22
console.log(global)  // 22 ha sido cambiada anteriromente en 22 en vez de 12.

// VARIABLES LOCALES
//global, fuera de ninguna función

function aumentar() {
    var local = 2
    let tambienLocal = 3
    const LOCAL = 4

    console.log(local)  //2
    console.log(tambienLocal)  //3
    console.log(LOCAL)  //4
}

 // undefined ya que var local o let tambienLocal dentro de una función es una variable local, sin el var sería global.
    aumentar()
    console.log(local)  // undefined
    console.log(tambienLocal)  // undefined
    console.log(LOCAL) // undefned

    /* VARIABLES LOCALES con AMBITO DE BLOQUE*/

    function disminuir() {
        if (true) {
            var local = 2
            let tambienLocal = 3
            const LOCAL = 4

            // LOCAL += 1 ERROR por asignar un valor variable a una constante
            console.log(local) // 2
            console.log(tambienLocal) // 3
            console.log(LOCAL) //4
           
        }
        console.log(local) // 2
        console.log(tambienLocal) // undefined
        console.log(LOCAL) //undefined
    }
    disminuir ()
    console.log(local)  // undefined
    console.log(tambienLocal)  // undefined
    console.log(LOCAL) // undefned