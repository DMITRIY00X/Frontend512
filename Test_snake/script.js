"use strict";

// const canvas = document.getElementById('game');

const scoreEl = document.getElementById('score');
const gameOverEl = document.getElementById('game-over');
const restartBtn = document.getElementById('restart-btn');


class Game {
  playfield = this.createPlayfield();

  activePiece = {
    x: 100,
    y: 100,
    blocks: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]

  };

  getState() {
    const playfield = this.createPlayfield();
    const { y: pieceY, x: pieceX, blocks } = this.activePiece;

    for (let y = 0; y < this.playfield.length; y++) {
      playfield[y] = [];
      for (let x = 0; x < this.playfield[y].length; x++) {
        playfield[y][x] = this.playfield[y][x];

      }
    }
    for (let y = 0; y < blocks.length; y++) {
      
      
    }
  }

  createPlayfield() {
    const playfield = [];

    for (let y = 0; y < 20; y++) {
      playfield[y] = [];
      for (let x = 0; x < 20; x++) {
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

    this.canvas = document.createElement("canvas");  // Запускаю canvas
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = this.width / columns;
    this.blockHeight = this.height / rows;

    this.element.append(this.canvas); // Вывожу поле canvas с помощью append
  }

}

const root = document.querySelector("#root");
const view = new View(root, 600, 600, 20, 20);