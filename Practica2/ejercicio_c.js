const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

// Mi Codigo:

const foundluis = personas.find(persona => persona.nombre === "Luis")
console.log(foundluis)

personas.forEach (p => console.log("Me llamo " + p.nombre + " y tengo " + p.edad + " años"))

const suma = personas.reduce((acumulador,persona) => acumulador + persona.edad, 0)

console.log("La suma de las edades es: " + suma)