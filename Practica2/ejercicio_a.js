const persona = {
    nombre: "Jesus Ramirez",
    edad: 21,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Destructuracion:

const { nombre, edad, ciudad, pais} = persona;

console.log("Me Llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad)