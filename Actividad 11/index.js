//FUNCIONES DE DECLARACIÓN


// a) 
function saludar() {
    console.log("Hola, bienvenido")
}
saludar()

// b) 
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenida!`)
}
saludarPersona("Martina")

// c)
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}
const resultadoEdad = esMayorDeEdad(20)
console.log(resultadoEdad) // true


//FUNCIONES DE FLECHA

// a)
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}
const resultadoEdadFlecha = esMayorDeEdadFlecha(15)
console.log(resultadoEdadFlecha)

// b)
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`)
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`)
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`)
    }
}

// Se usa dentro de un bucle: el iterador es el primer parámetro
// y el segundo lo elijo yo (5)
for (let i = 0; i <= 10; i++) {
    compararNumeros(i, 5)
}


//FUNCIONES CALLBACK

//a
const suma = (a, b) => {
    console.log(`El resultado de la suma es ${a + b}`)
}

const resta = (a, b) => {
    console.log(`El resultado de la resta es ${a - b}`)
}

//b
const operacion = (num1, num2, callback) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
        console.log("Debe ingresar solo números.")
    } else {
        callback(num1, num2)
    }
}

// Pruebas
operacion(10, 5, suma)       // El resultado de la suma es 15
operacion(10, 5, resta)      // El resultado de la resta es 5
operacion("hola", 5, suma)   // Debe ingresar solo números.
operacion(10, "5", resta)    // Debe ingresar solo números.