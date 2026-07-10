
class Game{
    playfield= [
        [0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
        ,[0,0,0,0,0,0,0,0,0,0]
    ]
}

class View {
    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;


        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.blockWidth = this.width / columns;

        this.element.append(this.canvas);

    }

    renderPlayfield(playfield){
for(let y = 0; y< playfield.length; y++){

}
    }
}
const game = new Game();
const root = document.querySelector("#root");
const view = new View(root, 320, 640, 20, 10);
view.renderPlayfield(game.playfield);
