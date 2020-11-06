class bullet {

    constructor(game) {

        this.game = game;
        this.isPass = false;
        this.size = {
            x: 40,
            y: 30,
        }
        this.speed = 7;
        this.pos = {
            x: Math.floor(Math.random() * SCREEN_WIDTH + SCREEN_WIDTH),
            y: Math.floor(Math.random() * 60 + (this.game.player.pos.y - 30)), // direct bullet to target 
        }

    }

    draw() {
        var img = new Image();
        img.src = 'image/obstacle_bullet.png';
        this.game.ctx.drawImage(img, this.pos.x, this.pos.y, this.size.x, this.size.y);       
        this.impactPlayer();
    }

    update() {
        // change pos x
        this.pos.x -= this.speed;
        // check if bullet over pass screen width
        if (this.pos.x <= -this.size.x) {
            this.isPass = true;
        }
    }

    impactPlayer() {
        //bullet
        if (
            (this.game.player.pos.x + this.game.player.size.x - 30) >= (this.pos.x) &&
            (this.game.player.pos.x + 20) <= (this.pos.x + this.size.x) &&
            (this.game.player.pos.y + this.game.player.size.y - 15) >= (this.pos.y) &&
            (this.game.player.pos.y) <= (this.pos.y + this.size.y - 15)
        ) {
            this.game.player.isImpact = true;
        }
    }

}




