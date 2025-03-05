// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable que almacena la lista de mejores amigos

let mejoresAmigos = [];

//Función para agregar mejores amigos
function agregarAmigo() {
    let amigos = document.getElementById("amigo").value.trim();
    // Colocaré doble condición para evitar ingresos vacios o duplicados
    if (!mejoresAmigos.includes(amigos) && amigos !== "") {
        mejoresAmigos.push(amigos);
        console.log(mejoresAmigos);
        document.getElementById("amigo").value = ""; // esto lo usaré para limpiar el espacio después de escribir el nombre
    } else if (amigos === "") {
        alert("Por favor, ingresa el nombre de un amigo antes de agregar");
    } else {
        alert(`El amigo llamado ${amigos} ya fue ingresado a la lista, por favor ingresa otro amigo`);
        document.getElementById("amigo").value = ""; // nuevamente esto lo usaré para limpiar el espacio después de escribir el nombre
    }
}
agregarAmigo()