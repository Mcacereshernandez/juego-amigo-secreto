// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable que almacena la lista de mejores amigos

let mejoresAmigos = [];

//Función para agregar mejores amigos
function agregarAmigo() {
    let amigos = document.getElementById("amigo").value.trim();
    if (amigos !== "") {
        mejoresAmigos.push(amigos);
        console.log(mejoresAmigos);
        document.getElementById("amigo").value = ""; // esto para limpiar el especio
    } else {
        alert("Por favor, ingresa un nombre válido antes de agregar")
    }    

}
agregarAmigo()