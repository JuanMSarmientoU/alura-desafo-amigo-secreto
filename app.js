// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de nombres ingresados
let nombres = [];

// Esperar a que el DOM esté completamente cargado
window.onload = function () {
    console.log("Página cargada completamente");
    // Si el ussuario presiona Enter en el input, intentar agregar un amigo
    document.getElementById("amigo").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Presionada tecla Enter, intentando agregar amigo");
            agregarAmigo();
        }
    });
    // Si el usuario presiona el botón 'Añadir', intentar agregar un amigo
    document.querySelector(".button-add").addEventListener("click", function() {
        console.log("Botón 'Añadir' presionado");
        agregarAmigo();
    });
};

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    console.log("Intentando agregar nombre:", nombre);
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        console.log("Nombre vacío detectado");
        input.value = "";
        input.placeholder = "Ingresar un nombre válido";
        input.classList.add("input-error"); // Agregar clase para resaltar el error
        setTimeout(() => {
            input.placeholder = "Escribe un nombre";
            input.classList.remove("input-error");
        }, 2000); // Restaurar el placeholder o la descripcion del input después de 2 segundos
        return;
    }
    
    // Verificar si el nombre ya existe en la lista
    if (nombres.includes(nombre)) {
        console.log("Nombre duplicado detectado");
        input.value = "";
        input.placeholder = "El nombre ya fue registrado";
        input.classList.add("input-error");
        setTimeout(() => {
            input.placeholder = "Escribe un nombre";
            input.classList.remove("input-error");
        }, 2000);
        return;
    }
    
    // Agregar el nombre a la lista si no está duplicado
    nombres.push(nombre);
    console.log("Nombre agregado correctamente:", nombre);
    mostrarLista(); // Actualizar la lista visualmente
    
    // Limpiar el input después de agregar el nombre
    input.value = "";
}

// Función para mostrar la lista de amigos agregados
function mostrarLista() {
    console.log("Actualizando lista de amigos");
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        
        // Botón para eliminar nombres de la lista
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "✖";
        btnEliminar.classList.add("delete-button");
        btnEliminar.onclick = () => {
            console.log("Eliminando nombre:", nombres[index]);
            nombres.splice(index, 1);
            mostrarLista(); // Actualizar la lista después de eliminar
        };
        
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
    console.log("Lista actualizada:", nombres);
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    console.log("Intentando sortear amigo secreto");
    // Validar que haya al menos dos personas en la lista
    if (nombres.length < 2) {
        console.log("Error: No hay suficientes participantes");
        document.getElementById("resultado").innerHTML = "Se necesitan al menos 2 personas.";
        return;
    }
    
    // Mezclar la lista de nombres de manera aleatoria
    let mezclados = [...nombres].sort(() => Math.random() - 0.5);
    console.log("Lista mezclada:", mezclados);
    let parejas = [];
    
    // Asignar cada persona con un amigo secreto diferente
    for (let i = 0; i < mezclados.length; i++) {
        let amigo = (i === mezclados.length - 1) ? mezclados[0] : mezclados[i + 1];
        parejas.push(`${mezclados[i]} → ${amigo}`);
    }
    
    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = parejas.join("<br>");
    console.log("Sorteo completado:", parejas);
}
