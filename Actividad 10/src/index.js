let edad = 19;
let numero = 3;
let nota = 9;

//Ejercicio 1
// a
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// b. Verificar si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// c. Verificar la nota
if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}


//Ejercicio 2
 // a. Imprimir los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// b. Imprimir los números del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// c. Verificar si los números son pares o impares
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// d. Mostrar el número junto con si es par o impar
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}

