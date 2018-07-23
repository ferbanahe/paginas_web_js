let pepe = {
    nombre : 'Pepe',
    direccion: {
        calle: 'c/ Pez',
        poblacion: 'Madrid'
    },
    saludar : function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
}


/* jose = pepe
jose.saludar()
pepe.saludar() */


let saludarFuera = pepe.saludar

// Ejemplos de EJECUCION DIRECTA de funciones

pepe.saludar() // Pepe
saludarFuera() // undefined
saludarFuera.call(pepe) // Pepe

//Ejemplos de RESPUESTA A EVENTOS

setTimeout(pepe.saludar, 1000) //undefined porque lo hace la máquina
setTimeout(pepe.saludar.bind(pepe), 3000) // Pepe porque lo hacemos nosotros