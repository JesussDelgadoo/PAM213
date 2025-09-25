
function simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {

    console.log("Iniciando la obtencion de datos...");

    const respuesta = await simularPeticionAPI("Datos de Usuario")

    console.log(respuesta);

    console.log("Proceso de obtencion de datos finalizado")

}

obtenerDatos();