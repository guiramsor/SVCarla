// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te quiero", time: 4 },
  { text: "Te amo", time: 9 },
  { text: "Te amo 3000", time: 12 },
  { text: "Te quiero mucho", time: 15 },
  { text: "Te quiero muchísimo", time: 18 },
  { text: "Te adoro", time: 21 },
  { text: "Me encantas", time: 24 },
  { text: "Eres mi todo", time: 27 },
  { text: "Te super amo", time: 30 },
  { text: "Te mega ultra amo", time: 33 },
  { text: "Te quiero nyan cat", time: 36 },
  { text: "Te amo con toda mi alma", time: 39 },
  { text: "Estoy enamorado de ti", time: 42 },
  { text: "Eres mi sol", time: 51 },
  { text: "Eres mi estrella", time: 54 },
  { text: "Eres mi luna", time: 57 },
  { text: "Te quiero con todo mi corazón", time: 64 },
  { text: "Te quiero con toda mi alma", time: 72 },
  { text: "Te quiero para siempre", time: 75 },
  { text: "Te quiero eternamente", time: 78 },
  { text: "Eres mi amor eterno", time: 81 },
  { text: "Eres mi felicidad", time: 87 },
  { text: "Eres mi alegría", time: 90 },
  { text: "Eres mi lugar seguro", time: 102 },
  { text: "Eres mi KISS KISS", time: 105 },
  { text: "Te quiero más que a mi vida", time: 114 },
  { text: "Te quiero infinito", time: 120 },
  { text: "Te quiero infinito entre 0 y 1", time: 123 },
  { text: "Te quiero infinito entre 0 y 2", time: 126 },
  { text: "Te quiero infinito entre ♾️ y ♾️", time: 129 },
  { text: "Te amo Carla", time: 132 },

  { text: "Te quiero Carla", time: 136 },
  { text: "Te amo", time: 140 },
  { text: "Te amo 3000", time: 143 },
  { text: "Te quiero mucho", time: 147 },
  { text: "Te quiero muchísimo", time: 150 },
  { text: "Te adoro", time: 153 },
  { text: "Me encantas", time: 156 },
  { text: "Eres mi todo", time: 160 },
  { text: "Te super amo", time: 162 },
  { text: "Te mega ultra amo", time: 166 },
  { text: "Te quiero nyan cat", time: 170 },
  { text: "Te amo con toda mi alma", time: 175 },
  { text: "Estoy enamorado de ti", time: 180 },
  { text: "Eres mi sol", time: 184 },
  { text: "Eres mi estrella", time: 189 },
  { text: "Eres mi luna", time: 194 },
  { text: "Te quiero con todo mi corazón", time: 197 },
  { text: "Te quiero con toda mi alma", time: 200 },
  { text: "Te quiero para siempre", time: 206 },
  { text: "Te quiero eternamente", time: 210 },
  { text: "Eres mi amor eterno", time: 214 },
  { text: "Eres mi felicidad", time: 218 },
  { text: "Eres mi alegría", time: 220 },
  { text: "Eres mi lugar seguro", time: 225 },
  { text: "Eres mi KISS KISS", time: 230 },
  { text: "Te quiero más que a mi vida", time: 236 },
  { text: "Te quiero infinito", time: 240 },
  { text: "Te quiero infinito entre 0 y 1", time: 247 },
  { text: "Te quiero infinito entre 0 y 2", time: 249 },
  { text: "Te quiero infinito entre ♾️ y ♾️", time: 253 },
  { text: "Te amo Carla", time: 256 },
  { text: "Te amo Carla", time: 263 },
  { text: "Te amo Carla", time: 274 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);