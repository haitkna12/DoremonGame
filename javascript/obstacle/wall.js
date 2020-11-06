class wall {
    constructor(game, type, pos, size) {
        this.game = game;
        this.speed = SPEED_WALL;
        this.isPass = false;

        this.init(type, pos, size);
    }

    init(type, pos, size) {

        this.img = new Image();
        if (type == 'wallBottom') {
            this.img.src = 'image/wallBottom.png';
        } else if (type == 'wallTop') {
            this.img.src = 'image/wallTop.png';
        }

        this.pos = { x: pos.x, y: pos.y };
        this.size = { x: size.x, y: size.y };
    }

    draw() {
        this.game.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
        // if impact with player stop game
        this.impactPlayer();
    }

    update() {
        // change pos x
        this.pos.x -= this.speed;
        // check if wall over pass screen width
        if (this.pos.x <= -this.size.x) {
            this.isPass = true;
        }
    }

    impactPlayer() {
        //bullet
        if (
            (this.game.player.pos.x + this.game.player.size.x - 30) >= (this.pos.x) &&
            (this.game.player.pos.x) <= (this.pos.x + this.size.x - 25) &&
            (this.game.player.pos.y + this.game.player.size.y) >= (this.pos.y + 10) &&
            (this.game.player.pos.y) <= (this.pos.y + this.size.y - 20)
        ) {
            this.game.player.isImpact = true;
        }
    }
}