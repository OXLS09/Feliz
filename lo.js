// Reproducir música
window.addEventListener("load", () => {
  const musica = document.createElement("audio");
  musica.id = "musica";
  musica.src = "jl.mp3"; // Cambiá por el nombre de tu archivo real
  musica.volume = 0.2;
  document.body.appendChild(musica);

  // Crear un contenedor vertical
  const contenedorMusica = document.createElement("div");
  contenedorMusica.style.display = "block"; // Asegura que estén en bloque
  contenedorMusica.style.textAlign = "center";
  contenedorMusica.style.marginTop = "20px";

  // Crear el texto de duración
  const duracionTexto = document.createElement("p");
  duracionTexto.style.marginBottom = "10px"; // Espacio entre texto y botón
  musica.addEventListener("loadedmetadata", () => {
    const duracion = musica.duration;
    const minutos = Math.floor(duracion / 60);
    const segundos = Math.floor(duracion % 60).toString().padStart(2, '0');
    duracionTexto.textContent = `Duración: ${minutos}:${segundos}`;
  });

  // Crear el botón de repetir
  const botonRepetir = document.createElement("button");
  botonRepetir.textContent = "Repetir música";
  botonRepetir.style.display = "block"; // Obligarlo a estar en su propia línea
  botonRepetir.style.margin = "2 auto"; // Centrado
  botonRepetir.addEventListener("click", () => {
    musica.currentTime = 0;
    musica.play();
  });

  // Agregar elementos al contenedor
  contenedorMusica.appendChild(duracionTexto);
  contenedorMusica.appendChild(botonRepetir);
  document.body.appendChild(contenedorMusica);

  // Intentar reproducir
  musica.play().catch(() => {
    console.log("jl.mp3");
  });

  // Mostrar la carta con animación
  const carta = document.getElementById("carta");
  setTimeout(() => {
    carta.classList.add("show");
  }, 2500);

  // Mostrar confeti
  generarConfeti();
});

// Generar confeti
function generarConfeti() {
  const confetiContainer = document.getElementById("confeti");
  confetiContainer.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confeti-piece");

    const colors = ["red", "blue", "green", "orange", "purple", "pink"];
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    piece.style.left = Math.random() * 100 + "%";
    piece.style.top = `${Math.random() * -100}px`;
    piece.style.animationDuration = 3 + Math.random() * 2 + "s";

    const size = 8 + Math.random() * 10;
    piece.style.width = size + "px";
    piece.style.height = size + "px";

    piece.style.position = "absolute";
    piece.style.borderRadius = "50%";
    piece.style.animationName = "caer";
    piece.style.animationTimingFunction = "linear";

    confetiContainer.appendChild(piece);
  }
}

// Reiniciar confeti
function reiniciarConfeti() {
  generarConfeti();
}
