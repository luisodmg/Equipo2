// 🎮 Juego: Catch the Ball
// Explicación: Mueves una barra con el mouse para atrapar una bola que cae.
// Si la atrapas, ganas puntos. Si no, se reinicia el juego.

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 🔧 Ajustes del lienzo
canvas.width = 700;
canvas.height = 600;

// 🏀 Configuración de la bola
let ball = {
  x: Math.random() * 380 + 10, // Posición aleatoria inicial (evita los bordes)
  y: 0,
  radius: 15,
  speed: 3,
  color: "#8cff95",
};

// 🧍 Control del jugador (la barra)
let catcher = {
  width: 80,
  height: 10,
  x: canvas.width / 2 - 40, // Centrado al inicio
  y: canvas.height - 40,
  color: "#8cff95",
};

let score = 0;
let mouseX = canvas.width / 2;
const maxScores = 5;
const scoreTableBody = document.getElementById("scoreTableBody");
const scoreStorageKey = "catchTheBallScoreHistory";

let scoreHistory = loadScoreHistory();

// 🖱 Evento: mover el mouse
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
});

// ⚙️ Actualizar posición y lógica
function update() {
  // Mueve la bola
  ball.y += ball.speed;

  // Actualiza la posición del catcher
  catcher.x = mouseX - catcher.width / 2;

  // 🧮 Detección de colisión (bola vs catcher)
  if (
    ball.y + ball.radius >= catcher.y &&
    ball.x >= catcher.x &&
    ball.x <= catcher.x + catcher.width
  ) {
    score = score + 2;
    resetBall();
    // Aumenta un poco la dificultad cada 5 puntos
    if (score % 5 === 0) ball.speed += 0.5;
  }

  // 🚫 Si la bola cae fuera del canvas
  if (ball.y > canvas.height) {
    alert(`💀 Immediate DEATH! Score: ${score}`);
    score = 0;
    ball.speed = 3;
    resetBall();
  }
}

// 🔁 Reinicia la bola desde arriba
function resetBall() {
  ball.x = Math.random() * (canvas.width - ball.radius * 2) + ball.radius;
  ball.y = 0;
}

function saveScore() {
  scoreHistory.unshift(score);
  scoreHistory = scoreHistory
    .sort((firstScore, secondScore) => secondScore - firstScore)
    .slice(0, maxScores);
  saveScoreHistory();
  renderScoreTable();
}

function loadScoreHistory() {
  try {
    const storedScores = localStorage.getItem(scoreStorageKey);

    if (!storedScores) {
      return [];
    }

    const parsedScores = JSON.parse(storedScores);

    if (!Array.isArray(parsedScores)) {
      return [];
    }

    return parsedScores.filter((scoreValue) => Number.isFinite(scoreValue));
  } catch (error) {
    return [];
  }
}

function saveScoreHistory() {
  try {
    localStorage.setItem(scoreStorageKey, JSON.stringify(scoreHistory));
  } catch (error) {
    // Ignore storage errors so the game keeps working without persistence.
  }
}

function renderScoreTable() {
  scoreTableBody.innerHTML = "";
  const rankedScores = [...scoreHistory].sort(
    (firstScore, secondScore) => secondScore - firstScore
  );

  if (rankedScores.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="2">Sin partidas aun</td>`;
    scoreTableBody.appendChild(emptyRow);
    return;
  }

  rankedScores.forEach((points, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${points}</td>`;
    scoreTableBody.appendChild(row);
  });
}

// 🎨 Dibujar todo en pantalla
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja la bola
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();

  // Dibuja el catcher
  ctx.fillStyle = catcher.color;
  ctx.fillRect(catcher.x, catcher.y, catcher.width, catcher.height);

  // Dibuja el score
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";
  ctx.fillText("Score: " + score, 10, 25);
}

// 🌀 Bucle del juego
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
renderScoreTable();
