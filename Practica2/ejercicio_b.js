
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }

]; 

// Mi Codigo:
const productoscaros = productos.filter(producto => producto.precio > 1000 )

const nombres = productoscaros.map(producto => producto.nombre)

console.log(productoscaros);
console.log(nombres);