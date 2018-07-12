// Averiguar la letra del DNI poniendo error en caso de no escribir números
function letraDNI(num) {
    if (isNaN(num *1) || num < 1 || num > 99999999 ) {
         return 'Error'
    }
    const aLETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y','F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    //const aLETRAS = [num%23]
    
    const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
    return LETRAS[num%23] 
} 
function probar () {
    console.log(letraDNI (5017828))
    // si queremos poner un 0 delante debemos hacerlo como string
    console.log(letraDNI ('00178228'))
    console.log(letraDNI (12775087))
    console.log(letraDNI('Pepe'));
}

probar ()