// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable que almacena la lista de mejores amigos

let mejoresAmigos = [];

//Función para agregar mejores amigos
function agregarAmigo() {
    //Variable para conectar amigos con el HTML
    let amigos = document.getElementById("amigo").value.trim();
    //Variable par conectar con listaAmigos de HTML
    let lista = querySelector("#listaamigos"); 
    // Colocaré doble condición para evitar ingresos vacios o duplicados
    if (!mejoresAmigos.includes(amigos) && amigos !== "") {
        mejoresAmigos.push(amigos);
        console.log(mejoresAmigos);

        //Creaación del li dentro del HTML
        let li = document.createElement("li");
        li.textContent = amigos;
        lista.appendChild(li);

        document.getElementById("amigo").value = ""; // esto lo usaré para limpiar el espacio después de escribir el nombre
    } else if (amigos === "") {
        alert("Por favor, ingresa el nombre de un amigo antes de agregar");
    } else {
        alert(`El amigo llamado ${amigos} ya fue ingresado a la lista, por favor ingresa otro amigo`);
        document.getElementById("amigo").value = ""; // nuevamente esto lo usaré para limpiar el espacio después de escribir el nombre
    }
}
agregarAmigo()


//Función para mostrar el listado de amigos agregados en la pantalla de visualización

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
