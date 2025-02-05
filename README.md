# Amigo Secreto 🎁
Este proyecto es parte del curso de Principiante en Programación G8 - ONE, de la academia Alura Latam.
## Descripción 📜
Este proyecto es una aplicación web que permite a los usuarios agregar nombres a una lista y sortear un "Amigo Secreto" de manera aleatoria. Se asegura de que cada persona reciba a otra sin repeticiones ni asignaciones a sí misma.

## Características ✨
- Permite ingresar nombres a una lista evitando duplicados o espacios vacíos.
- Muestra una lista visual de los participantes con la opción de eliminar nombres.
- Sortea automáticamente los nombres en parejas sin repeticiones.
- Usa efectos visuales y mensajes para mejorar la experiencia del usuario.

## Tecnologías Utilizadas 🛠️
```txt
- HTML → Para la estructura de la página.
- CSS → Para los estilos y diseño de la interfaz.
- JavaScript → Para la lógica de la aplicación.
```

## Cómo Ejecutarlo 🚀
```sh
git clone https://github.com/JuanMSarmientoU/alura-desafo-amigo-secreto.git
cd amigo-secreto
open index.html
```

## Estructura del Proyecto 📁
```plaintext
📂 amigo-secreto
 ├── 📄 index.html   # Página principal
 ├── 📄 style.css    # Estilos de la aplicación
 ├── 📄 app.js       # Lógica del sorteo
 ├── 📂 assets       # Imágenes y otros recursos
```

## Funcionalidades Principales 🏗️
### Agregar Participantes
```js
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "" || nombres.includes(nombre)) {
        input.placeholder = "Nombre inválido o ya registrado";
        return;
    }
    nombres.push(nombre);
    mostrarLista();
    input.value = "";
}
```

### Eliminar Participantes
```js
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "✖";
        btnEliminar.onclick = () => {
            nombres.splice(index, 1);
            mostrarLista();
        };
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}
```

### Sorteo de Amigo Secreto
```js
function sortearAmigo() {
    if (nombres.length < 2) {
        document.getElementById("resultado").innerHTML = "Se necesitan al menos 2 personas.";
        return;
    }
    let mezclados = [...nombres].sort(() => Math.random() - 0.5);
    let parejas = mezclados.map((nombre, i) => `${nombre} → ${mezclados[(i + 1) % mezclados.length]}`);
    document.getElementById("resultado").innerHTML = parejas.join("<br>");
}
```

## Capturas de Pantalla 🖼️
*(Añadir capturas si es necesario)*

## Autor 🧑‍💻
```txt
- JuanMSarmientoU - https://github.com/JuanMSarmientoU
```

## Contribuciones 🤝
```txt
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar un pull request.
```

## Licencia 📜
```txt
Este proyecto está bajo la licencia MIT.
```

