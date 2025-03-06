// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable que almacena la lista de mejores amigos

let mejoresAmigos = [];

//Función para agregar mejores amigos
function agregarAmigo() {
    //Variable para conectar amigos con el HTML
    let amigos = document.getElementById("amigo").value.trim();
    //Variable par conectar con listaAmigos de HTML
    let lista = document.querySelector("#listaAmigos"); 

    lista.innerHTML = ""; //Limpiar la lista para agregar nuevos elementos

    // Colocaré doble condición para evitar ingresos vacios o duplicados
    if (!mejoresAmigos.includes(amigos) && amigos !== "") {
        mejoresAmigos.push(amigos);
        console.log(mejoresAmigos);


        //recorrer el listado e ir agregando los elementos a la lista
        for (let i = 0; i< mejoresAmigos.length; i++) {
            //Creaación del li dentro del HTML
            let li = document.createElement("li");
            li.textContent = mejoresAmigos[i];
            lista.appendChild(li);
        }

        document.getElementById("amigo").value = ""; // esto lo usaré para limpiar el espacio después de escribir el nombre
    } else if (amigos === "") {
        alert("Por favor, ingresa el nombre de un amigo antes de agregar");
    } else {
        alert(`El amigo llamado ${amigos} ya fue ingresado a la lista, por favor ingresa otro amigo`);
        document.getElementById("amigo").value = ""; // nuevamente esto lo usaré para limpiar el espacio después de escribir el nombre
    }
}

//Crearé una funcionalidad para generar aleatoridad y sortear a los amigos de la lista para elegir un ganador

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (mejoresAmigos === 0) {
        resultado.innerHTML = "No hay amigos disponibles en el listado para realizar el sorteo";
        return;
    }

    let calculoDeAleatoreidad = Math.floor(Math.random() * mejoresAmigos.length);
    let amigoSorteado = mejoresAmigos [calculoDeAleatoreidad];
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}


