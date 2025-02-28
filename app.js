// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable que almacena la lista de mejores amigos

let mejoresAmigos = [];

//Función para agregar mejores amigos
function agregarAmigo() {
    let amigos = document.getElementById("amigo").value.trim();
    mejoresAmigos.push(amigos);
    console.log(mejoresAmigos);
    document.getElementById("amigo").value = ""; // Limpiar el campo de texto
    return;
}
agregarAmigo()