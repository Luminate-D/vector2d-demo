const spanMouseX = document.getElementById('mouseX');
const spanMouseY = document.getElementById('mouseY');

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

document.addEventListener('mousemove', async (event) => {
    window.mouseX = event.x - 10;
    window.mouseY = event.y - 10;

    spanMouseX.textContent = mouseX;
    spanMouseY.textContent = mouseY;
});

class Player {
    constructor(x = 250, y = 250) {
        this.vector = new Vector2D(x, y);
    }

    update() {
        let mVec = mouseVector.clone();
        let thisVec = this.vector.clone();
        thisVec.add(250);
        mVec.subtract(thisVec);
        mVec.divide(20);
        this.vector.add(mVec);
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.vector.x, this.vector.y, 25, 0, 2 * Math.PI)
        ctx.fill();
    }
}

let player = new Player();

setInterval(() => {
    ctx.clearRect(0, 0, 500, 500);
    window.mouseVector = new Vector2D(mouseX + 250, mouseY + 250);
    player.update();
    player.draw();
}, 1000 / 60);