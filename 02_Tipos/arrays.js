/* let aDatos = ['Pepe', 'Rosa', 'Maria']  // es un array, es un subtipo de objeto que se crea con varios elementos, pepe, maria, etc. Es una lista numerada que comienza por cero, pepe es 0, rosa 1, etc

console.log(typeof aDatos, aDatos)
aDatos[0] = 'Jose' // hemos cambiado el nombre de Pepe por Jose
console.log(aDatos)
aDatos[aDatos.length]='Luis' //menos elegante al contarlo como 4
aDatos.push('Elena') // más elegante al situarlo directamente al final de la lista
console.log(aDatos) */

let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'}
]
 
aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
aDatosFull[0].apellidos = "Perez"
aDatosFull[1].apellidos = "Lopez"

console.log(aDatosFull)


















