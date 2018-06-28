
let calculos = {
    num1 : 0,
    num2 : 0,
    result : 0, 
    sumar : function () {
        this.result = this.num1 + this.num2
    },
    mostrar : function () {
        console.log('El resultado es', this.result)
    }
}

calculos.num1 = 23 //propiedad del objeto
calculos.num2 = 3 //propiedad del objeto
calculos.sumar() //el punto es el operador de objetos
calculos.mostrar()

calculos.error = 'Sin errores'
calculos.borrar = function() {this.result = 0}
calculos.borrar()
calculos.mostrar()