
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const statusEl = document.getElementById('status');

// Карта: 1 = стена, 0 = проход, 2 = точка, 3 = старт Пакмана, 4 = призрак
const map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,3,2,2,1,2,2,2,1,0,0,0,1],
  [1,2,1,2,1,2,1,2,1,0,1,0,1],
  [1,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,2,1,2,1,0,1,0,1,0,1,0,1],
  [1,2,0,2,0,0,0,0,0,0,0,0,1],
  [1,2,1,2,1,1,1,1,1,0,1,0,1],
  [1,2,1,2,0,0,0,0,0,0,1,0,1],
  [1,2,1,1,1,0,4,0,1,1,1,0,1],
  [1,2,2,2,1,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const cellSize = 40; // размер клетки в пикселях
const rows = map.length;
const cols = map[0].length;

let pacman = { r: 0, c: 0, angle: 0.25, targetR: 0, targetC: 0, moving: false };
let ghosts = [];
let dots = []; // позиции точек
let score = 0;
let gameActive = true;

// Инициализация
function init() {
  // Найти старт и призраков
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 3) {
        pacman.r = pacman.targetR = r;
        pacman.c = pacman.targetC = c;
      } else if (map[r][c] === 4) {
        ghosts.push({ r, c, dr: 0, dc: 0 });
      } else if (map[r][c] === 2) {
        dots.push({ r, c });
      }
    }
  }
  draw();
}

// Отрисовка всего кадра
function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Стены и точки
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cellSize;
      const y = r * cellSize;

      // Стены
      if (map[r][c] === 1) {
        ctx.fillStyle = '#444';
        ctx.fillRect(x, y, cellSize, cellSize);
        // Декоративная рамка
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, cellSize, cellSize);
      }

      // Точки
      if (map[r][c] === 2) {
        const dotX = x + cellSize / 2;
        const dotY = y + cellSize / 2;
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Пакман (с «ртом»)
  const px = pacman.c * cellSize + cellSize / 2;
  const py = pacman.r * cellSize + cellSize / 2;
  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(pacman.angle); // поворот «рта»
  ctx.fillStyle = '#ffaa00';
  ctx.beginPath();
  ctx.arc(1, 1, cellSize  / 2.5, 0.35 * Math.PI, 1.65 * Math.PI); // дуга с прорезью
  ctx.fill();
  ctx.restore();

  // Призраки
  ghosts.forEach(g => {
    const gx = g.c * cellSize + cellSize / 2;
    const gy = g.r * cellSize + cellSize / 2;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    // Полукруг + «юбочка»
    ctx.arc(gx, gy - 9, cellSize / 3, 0, Math.PI);
    ctx.fill();
    ctx.fillRect(gx - cellSize / 3, gy, cellSize * 2 / 3, cellSize / 3);
  });
  updateScore();
}





// Логика движения Пакмана (по клеткам, но с анимацией)
function movePacman(dr, dc) {
  if (!gameActive) return;

  const nr = pacman.targetR + dr;
  const nc = pacman.targetC + dc;

  if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) return;
  if (map[nr][nc] === 1) return; // стена

  pacman.targetR = nr;
  pacman.targetC = nc;
  pacman.moving = true;
}

// Анимация движения между клетками
function animateMovement() {
  if (!pacman.moving) return;

  const targetX = pacman.targetC * cellSize + cellSize / 2;
  const targetY = pacman.targetR * cellSize + cellSize / 2;
  const currentX = pacman.c * cellSize + cellSize / 2;
  const currentY = pacman.r * cellSize + cellSize / 2;

  const dx = targetX - currentX;
  const dy = targetY - currentY;
  const dist = Math.sqrt(dx*dx + dy*dy);

  if (dist < 2) { // почти на месте
    pacman.r = pacman.targetR;
    pacman.c = pacman.targetC;
    pacman.moving = false;

    // Сбор точки
    if (map[pacman.r][pacman.c] === 2) {
      map[pacman.r][pacman.c] = 0;
      score += 10;
      updateScore();
      checkWin();
    }
  } else {
    // Двигаем по направлению к целевой клетке
    const speed = 2;
    const moveX = (dx / dist) * speed;
    const moveY = (dy / dist) * speed;

    pacman.c += moveX / cellSize;
    pacman.r += moveY / cellSize;
  }
}

function updateScore() {
  scoreEl.textContent = 'Счёт: ' + score;
}

function checkWin() {
  const hasDots = dots.some(d => map[d.r][d.c] === 2);
  if (!hasDots) gameOver(true);
}

function moveGhosts() {
  if (!gameActive) return;

  ghosts.forEach(g => {
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    const [dr, dc] = dirs[Math.floor(Math.random() * dirs.length)];
    const nr = g.r + dr;
    const nc = g.c + dc;

    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && map[nr][nc] !== 1) {
      g.r = nr;
      g.c = nc;
    }
  });
}

function checkCollision() {
  for (const g of ghosts) {
    if (g.r === pacman.r && g.c === pacman.c) {
      gameOver(false);
      return;
    }
  }
}

function gameOver(win) {
  gameActive = false;
  statusEl.textContent = win ? 'Вы победили!' : 'Игра окончена!';
}

// Управление
document.addEventListener('keydown', (e) => {
  if (!gameActive) return;
  e.preventDefault(); // чтобы не скроллило страницу

  switch (e.key) {
    case 'ArrowUp': movePacman(-1, 0); break;
    case 'ArrowDown': movePacman(1, 0); break;
    case 'ArrowLeft': movePacman(0, -1); break;
    case 'ArrowRight': movePacman(0, 1); break;
  }
});

// Игровой цикл
function loop() {
  animateMovement();
  // moveGhosts();
  checkCollision();
  draw();
  requestAnimationFrame(loop);
}

init();
loop();