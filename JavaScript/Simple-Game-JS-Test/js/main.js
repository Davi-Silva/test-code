let canvas, ctx, h, w;
let mousePos;

let player = {
    x: 10,
    y: 10,
    width: 2,
    heigth: 2,
    color: 'blue',
    move: function (x, y) {
        this.x = x;
        this.y = y;
    },
    draw: function (ctx) {
        ctx.save();
        ctx.translate(this.x - 100, this.y - 100);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.heigth);
        ctx.restore();
    }
}

window.onload = function init() {
    canvas = document.querySelector("#drag-game-canvas");

    w = canvas.width;
    h = canvas.heigth;

    ctx = canvas.getContext('2d');

    canvas.addEventListener('mousemove', mouseMoved);
    mainLoop();
}

function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mainLoop() {
    ctx.clearRect(0, 0, w, h);
    player.draw(ctx);
    if (mousePos !== undefined) {
        player.move(mousePos.x, mousePos.y);
    }
    requestAnimationFrame(mainLoop);
}
