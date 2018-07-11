/*let oDatos {}
let oDatos = {
    edad: 22
}*/
// let oDatos2 = new Object(), se suele escribir lo de arriba para objetos, ejecutándose el new.
// oDatos.nombre = 'Pepe'
// oDatos['apellido'] = 'Perez'

let oDatos = {
    nombre: 'Pepe',
    apellidos: 'Pérez',
    edad: 22
}

oDatos.profesion = 'programador'

console.log(oDatos)

// let x = 22
// x *= 2
// console.log(oDatos.edad *=3)

/* oVuelo = {
    airline:'',
    number:'',
    departure : {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    arival: {
        clave_IATA : '',
        time: '',
        ciudad: ''
    }
}
 */

let oVuelo = {
    airline:'Oceanic',
    number:'815',
    departure : {
        clave_IATA : 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arival: {
        clave_IATA : 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Angeles'
    }
}

oVuelo.arival.ciudad = 'Los Angeles'

oVuelo.calcularPasajeros = function () {
}

oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }    
    }
}


console.log(oVuelo)

function leeObjeto (oDatos) {
    for (const key in oDatos) {

        if (typeof oDatos[key] === 'object') { 
            console.log(`Las propiedades de ${key} son: `)
            leeObjeto(oDatos[key])
        } else {
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        } 
    }  
}

     
// leeObjeto(oVuelo)
console.clear()
oVuelo.mostrar()
