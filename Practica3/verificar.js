
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin")
            resolve("Acceso concedido");
        else
            reject("Acceso denegado");
    });
}

verificarUsuario("admin")
    .then(res => console.log("Admin tiene " + res)) // Acceso concedido
    .catch(err => console.log("Admin tiene " + err));

verificarUsuario("chucho")
    .then(res => console.log("Chucho tiene " + res))
    .catch(err => console.log("Chucho tiene " + err)); // Acceso denegado