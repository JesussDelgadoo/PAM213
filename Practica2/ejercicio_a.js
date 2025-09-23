const persona = {
    nombre: "Jesus Ramirez",
    edad: 21,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Destructuracion:

const { nombre, edad, direccion} = persona;

console.log("Me Llamo " + nombre + ", tengo " + edad + " años y vivo en " + direccion.ciudad)