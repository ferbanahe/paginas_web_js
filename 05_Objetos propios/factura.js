let factura = {
    empresa : {
        nombre : '',
        direccion : '',
        telefono : '',
        nif : ''
    }, 
    cliente : {
        nombre : '',
        direccion : '',
        telefono : '',
        nif : ''
    }, 
    elementos : [
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
    ],
    importeTotal : '',
    tipoIVA: '',
    formaPago: ''
}
factura.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
}

factura.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
}

let factura1 = {
    empresa : {
        nombre : 'Planeta',
        direccion : 'c/ Barcelona',
        telefono : '456 234 765',
        nif : 'D-34567234'
    }, 
    cliente : {
        nombre : 'Libreria Azul',
        direccion : 'c/ Cantar',
        telefono : '347 128 236',
        nif : 'J-34156784'
    }, 
    elementos : [
        {descripcion : 'Dune',
        precio: '29',
        cantidad: '18'}, 
        {descripcion : 'Libertad',
        precio: '19',
        cantidad: '23'}, 
        {descripcion : 'Trampa 22',
        precio: '35',
        cantidad: '23'}, 
    ],
    importeTotal : 0,
    tipoIVA: 1.04,
    formaPago: 'Transferencia',   
}

factura1.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIVA
        }
    )
}

factura1.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if (isNaN(key)) {
                    console.log(`Propiedades de ${key}: `)
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}

// factura1.mostrar()
console.log(factura1)
