/**Declaración */
var saludo
/**Inicialización */
saludo = 'Hola'
/**Declaración + Inicialización */
var user = 'Mundo'

/*
Tipos de datos
-string: cadena de caracteres, ejemplo saludo = "hola" y va siempre entre comillas
-number: cadena de números, ejemplo saludo = 21 y no va entre comillas
-booleans (true / false), ejemplo var isEstudiante = true, siempre sin comillas y se suele identificar con un is
-object: lo que no sea ninguno de los tres anteriores y va en notación JSON con llaves que delimitan el objeto propiedad seguida de dos puntos y valor, lleva un conjunto de propidades, ejemplo
 var persona = {
        nombre: 'Pepe',
        edad: 34,
        isEstudiante:true
    }
-undefined: indefinido, ejemplo var algo
*/


var nombre = 'Pepe' //string
var edad = 23   //number
var isEstudiante = false    //boolean
var algo    //undefined
// Objeto en notacion JSON
var persona = {
    nombre: 'Juan',
    edad: 34,
    isEstudiante: true
}


// // como es JS respecto a los tipos 
//     - debil, porque no se indican los tipos definidos.
//     - dinámico, porque me permite cambiar el tipo de variable.
    
console.log(saludo, user)
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(isEstudiante, typeof isEstudiante)
console.log(algo, typeof algo)
console.log(persona, typeof persona)
console.log(persona.nombre, typeof persona.nombre)

