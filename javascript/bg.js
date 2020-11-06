
class bg {
    constructor(game) {
        this.game = game;
        this.draw();
        this.src = 'image/background' + Math.floor(Math.random() * 2.9) + '.png';
    }

    draw() {
        var img = new Image();
        img.src = this.src;
        this.game.ctx.drawImage(img, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }
}