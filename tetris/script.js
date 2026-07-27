"use strict";


class Game {
    // playfield = [
    //     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    // ]

    playfield = this.createPlayfield();
    activePiece = {
        x: 0,
        y: 0,
        blocks: [
            [0, 1, 0]
            [1, 1, 1]
            [0, 0, 0]
        ]
    };

    getState() {
        const playfield = this.createPlayfield();
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < this.playfield.length; y++){
            playfield[y] = [];
            for(let x = 0; x< this.playfield[y].length; x++){
                playfield[y][x] = this.playfield[y][x];
            }
        }

        for(let y = 0; y< blocks.length; y++){
            for(let x = 0; x<blocks[y].length; x++){
                if(blocks[y][x]){
                    playfield[pieceY + y][pieceX + x] = blocks;
                }
            }
        }

    }

    createPlayfield() {
        const playfield = [];
        for (let y = 0; y < 20; y++) {
            playfield[y] = [];
            for (let x = 0; x < 10; x++) {
                playfield[y][x] = 0;
            }
        }
        return playfield;
    }
}

class View {
    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.context = this.canvas.getContext("2d");

        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;

        this.element.append(this.canvas);

    }
    renderPlayfield(playfield) {
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];

            for (let x = 0; x < line.length; x++) {
                const block = line[x];
                if (block) {
                    this.context.fillStyle = "red";
                    this.context.strokeStyle = "black";
                    this.context.lineWidth = 2;

                    this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                    this.context.strokeRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                }
            }
        }
    }
}
const game = new Game();
const root = document.querySelector("#root");
const view = new View(root, 320, 640, 20, 10);
view.renderPlayfield(game.playfield);
console.log(game.playfield)

