//1. Arreglos

// 1.a) Cargar 5 números con prompt() y push()
console.log("--- 1.a) Cinco números ---");
const numeros = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`Ingresá el número ${i + 1} de 5:`));
  numeros.push(numero);
}
console.log(numeros);

// 1.b) Guardar solo los números impares
console.log("--- 1.b) Solo impares ---");
const impares = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`Ingresá el número ${i + 1} de 5 (solo se guardan impares):`));
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
}
console.log(impares);

// 1.c) forEach() + toUpperCase() sobre el mismo arreglo
console.log("--- 1.c) forEach a mayúsculas ---");
const frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, indice) => {
  frutas[indice] = fruta.toUpperCase();
});
console.log(frutas);

// 1.d) map() para crear un nuevo arreglo (no modifica el original)
console.log("--- 1.d) map a mayúsculas ---");
const frutasOriginal = ["pera", "manzana", "banana", "durazno"];
const frutasMayusculas = frutasOriginal.map((fruta) => fruta.toUpperCase());
console.log("Original:", frutasOriginal);
console.log("Nuevo:", frutasMayusculas);

// 1.e) filter() + includes() para frutas que contengan "na"
console.log("--- 1.e) filter con 'na' ---");
const frutasConNa = frutasOriginal.filter((fruta) => {
  if (fruta.includes("na")) {
    return true;
  }
  return false;
});
console.log(frutasConNa);


//2. Objetos

// 2.a) Un objeto de producto de indumentaria
console.log("--- 2.a) Objeto producto ---");
const producto = {
  nombre: "Remera básica",
  precio: 8500,
  stock: 12,
  talles: ["s", "m", "l"]
};
console.log(producto);

// 2.b) Arreglo de 4 objetos + forEach() mostrando los de stock < 5
console.log("--- 2.b) Stock menor a 5 ---");
const productos = [
  { nombre: "Remera básica", precio: 8500, stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Jean clásico", precio: 25000, stock: 3, talles: ["s", "m", "l"] },
  { nombre: "Campera de abrigo", precio: 45000, stock: 15, talles: ["m", "l"] },
  { nombre: "Buzo con capucha", precio: 22000, stock: 4, talles: ["s", "m", "l"] }
];
productos.forEach((prod) => {
  if (prod.stock < 5) {
    console.log(prod);
  }
});

// 2.c) map() para aplicar 10% de descuento (nuevo arreglo)
console.log("--- 2.c) Descuento del 10% ---");
const productosConDescuento = productos.map((prod) => {
  return {
    ...prod,
    precio: prod.precio * 0.9
  };
});
console.log(productosConDescuento);

// 2.d) filter() para productos con stock mayor a 10
console.log("--- 2.d) Stock mayor a 10 ---");
const productosStockAlto = productos.filter((prod) => prod.stock > 10);
console.log(productosStockAlto);