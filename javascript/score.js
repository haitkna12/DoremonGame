
class score {
    constructor(game) {
        this.game = game;
        this.score = 0;
        this.journey = -(SCREEN_WIDTH + SIZE_X_WALL - GAP_WALL);
    }

    update() {
        this.journey += SPEED_WALL;
        this.score = Math.round((this.journey + this.game.player.pos.x)/GAP_WALL);
        if (this.score < 0) this.score = 0;
    }

    draw(){
        this.game.ctx.font = '14px Comic Sans MS';
        this.game.ctx.fillStyle = 'rgb(28,34,54)';
        this.game.ctx.fillText('Score: ' + this.score.toString(), SCREEN_WIDTH - 80,20);
    }
}