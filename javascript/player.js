
class player {
    constructor(game) {
        this.game = game;
        this.size = {
            x: 80,
            y: 60,
        }
        this.pos = {
            x: 30,
            y: 130,
        }
        this.speed = {
            x: 0,
            y: 0,
        }
        this.isImpact = false;
        this.eventKeyboard();
    }



    draw() {
        var img = new Image();
        img.src = 'image/player.png';
        this.game.ctx.drawImage(img, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    update() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
        // if impact with obstacle then stop game    
        if (this.isImpact == true) {
            //stop soundTrack
            setTimeout(() => this.game.soundTrack.stop(), 1000)
            this.game.soundFallen.play();
            // stop game
            this.game.stop();
            // fallen after stop game
            this.fallen();
            // stop fallen after 1 second
            setTimeout(() => clearInterval(this.fallenInterval), 1000);
        }
    }

    fallen() {
        this.fallenInterval = setInterval(() => {
            this.pos.y += 6;
            this.game.obstacle.update();
            this.game.draw();
        }, 10)
    }


    eventKeyboard() {

        window.addEventListener('keydown', (e) => {

            if (e.keyCode == 38) {
                this.speed.y = -SPEED;
            }

            if (e.keyCode == 40) {
                this.speed.y = SPEED;
            }

            if (e.keyCode == 37) {
                this.speed.x = -SPEED;
            }

            if (e.keyCode == 39) {
                this.speed.x = SPEED;
            }
        })

        window.addEventListener('keyup', (e) => {


            if (e.keyCode == 38 && this.speed.y == -SPEED) {
                this.speed.y = 0;
            }

            if (e.keyCode == 40 && this.speed.y == SPEED) {
                this.speed.y = 0;
            }

            if (e.keyCode == 37 && this.speed.x == -SPEED) {
                this.speed.x = 0;
            }

            if (e.keyCode == 39 && this.speed.x == SPEED) {
                this.speed.x = 0;
            }
        })
    }
}

