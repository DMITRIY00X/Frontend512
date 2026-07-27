const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.getElementById("startButton");

const gridSize = 20;  // размер одного сегмента
let snake, direction, foot, score, gameSpeed, gameRunning;  // Объявляю переменные

// function startGame() {
//     snake = [{
//         x: 200,
//         y: 200
//     }];

//     direction = "RIGHT";
//     score = 0;
//     gameSpeed = 200;
//     foot = getRandomFootPosition();
//     gameRunning = true;

//     scoreEl.textContent = "Счет: 0";
//     startButton.style.display = "none";

//     gameLoop();
// }


const initialSnakeLength = 3; // Сделал змейку изначально длиннее. Длина начальной змейки 3

function startGame() {
    // Задаю координаты в которых появляется змейка 
    const startX = 200;
    const startY = 200;

    //   Создаю пустой массив змейки и при помощи метода push() добавляю элементы к начальной змейке массив из 3 элементов.
    snake = [];
    for (let i = 0; i < initialSnakeLength; i++) {
        snake.push({
            x: startX - i * gridSize,
            y: startY
        });
    }
    // Задаю  начальное направление движения змейки
    direction = "RIGHT";
    score = 0;
    gameSpeed = 200; // Скорость движения змейки
    foot = getRandomFootPosition();
    gameRunning = true;

    scoreEl.textContent = "Счет: 0";
    startButton.style.display = "none";// Кнопка "начать игру" во время игры скрыта.

    gameLoop();
}
// Создаю функцию рандомного появления яблока на игровом поле
function getRandomFootPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    }
}

// Функция окончания игры, эта функция показывает результат игры, показывает что игра окончена и выводит итоговый счет
function gameOver() {
    gameRunning = false;
    let result = document.createElement("p");
    result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${score}</span>`;
    scoreEl.prepend(result);
    startButton.style.display = "inline";
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  

    // ctx.fillStyle = "red";
    // ctx.fillRect(foot.x, foot.y, gridSize, gridSize);
    // ctx.fillStyle = "black";
    // ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);


    // Нарисовал круглое яблоко (мне кажется круглое яблоко визуально лучше)
    const radius = gridSize / 2 - 2;                 // радиус круга (чуть меньше половины клетки) радиус получился на 8
    const centerX = foot.x + gridSize / 2;           // размещаю круг по центру по X
    const centerY = foot.y + gridSize / 2;           // размещаю круг по центр по Y

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); // С помощью arc рисую круг
    ctx.fillStyle = 'red'; // Делаю яблоко красным
    ctx.fill();
    ctx.strokeStyle = 'black'; // Делаю поле яблока черным
    ctx.lineWidth = 2;
    ctx.stroke();

    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });

    //   Создаю голову и указаваю направление движения головы 
    let head = { ...snake[0] };

    if (direction === "UP") {
        head.y -= gridSize;
    }
    if (direction === "DOWN") {
        head.y += gridSize;
    }
    if (direction === "LEFT") {
        head.x -= gridSize;
    }
    if (direction === "RIGHT") {
        head.x += gridSize;
    }
    // Условия столкновения с полями игрового поля (выход за пределы игрового поля означает конец игры)
    if (head.x < 0 || head.x >= canvas.width || head.y >= canvas.height || head.y < 0) {
        gameOver();
        return;
    }
    // Условия столкновения змейки с самой змейкой
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);// Вывожу новую голову змеи на экран (Добавление элемента то есть головы змейки идет в начало).
    // Условие если змейка съедает яблоко то счет увеличивается, также в else с помощью метода pop() убираю последний элемент змейки
    if (head.x === foot.x && head.y === foot.y) {
        foot = getRandomFootPosition();
        score++;
        scoreEl.textContent = `Счет: ${score}`;
        if (gameSpeed > 50) {
            gameSpeed -= 5;
        }
    } else {
        snake.pop(); //
    }

    if (snake.length > 0) {
        setTimeout(gameLoop, gameSpeed);
    }

    // console.log(snake);
}
// Функция движений и ограничения движений змейки
function changeDirection(event) {
    const key = event.key;

    if (key == "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (key == "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (key == "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (key == "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }

    // console.log(direction);    
}

document.addEventListener("keydown", changeDirection); // Обработка событий нажатия клавиш (Управление змейкой)
startButton.addEventListener("click", startGame); // Обработка события нажатия кнопки "Начать игру".

