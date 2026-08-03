const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.getElementById("startButton");

const gridSize = 20;
let snake, direction, foot, score, gameSpeed, gameRunning, isPaused; // добавили isPaused

const initialSnakeLength = 3;

function startGame() {
    const startX = 200;
    const startY = 200;

    snake = [];
    for (let i = 0; i < initialSnakeLength; i++) {
        snake.push({
            x: startX - i * gridSize,
            y: startY
        });
    }

    direction = "RIGHT";
    score = 0;
    gameSpeed = 200;
    foot = getRandomFootPosition();
    gameRunning = true;
    isPaused = false; // при старте пауза выключена

    scoreEl.textContent = "Счет: 0";
    startButton.style.display = "none";

    gameLoop();
}

function getRandomFootPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    };
}

function gameOver() {
    gameRunning = false;
    isPaused = false;

    let result = document.createElement("p");
    result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${score}</span>`;
    scoreEl.prepend(result);
    startButton.style.display = "inline";
}

function drawPause() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.font = "40px Verdana";
    ctx.textAlign = "center";
    ctx.fillText("ПАУЗА", canvas.width / 2, canvas.height / 2);
}

function gameLoop() {
    if (!gameRunning) return;

    // Если пауза — рисуем паузу и выходим, не двигаем змейку
    if (isPaused) {
        drawPause();
        setTimeout(gameLoop, gameSpeed); // чтобы цикл не останавливался полностью
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const radius = gridSize / 2 - 2;
    const centerX = foot.x + gridSize / 2;
    const centerY = foot.y + gridSize / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });

    let head = { ...snake[0] };

    if (direction === "UP") {
        head.y -= gridSize;
    } else if (direction === "DOWN") {
        head.y += gridSize;
    } else if (direction === "LEFT") {
        head.x -= gridSize;
    } else if (direction === "RIGHT") {
        head.x += gridSize;
    }

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        gameOver();
        return;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    if (head.x === foot.x && head.y === foot.y) {
        foot = getRandomFootPosition();
        score++;
        scoreEl.textContent = `Счет: ${score}`;
        if (gameSpeed > 50) {
            gameSpeed -= 5;
        }
    } else {
        snake.pop();
    }

    setTimeout(gameLoop, gameSpeed);
}

function changeDirection(event) {
    const key = event.key;

    // Пауза/снятие паузы по Enter
    if (key === "Enter") {
        isPaused = !isPaused;
        return;
    }

    if (key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
}

document.addEventListener("keydown", changeDirection);
startButton.addEventListener("click", startGame);