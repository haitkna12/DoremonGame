class game {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;

        this.player = new player(this);
        this.obstacle = new obstacle(this);
        this.score = new score(this);
        this.bg = new bg(this);

        this.setSoundEffect();
    }


    loop() {
        this.soundTrack.play();
        this.stopGame = setInterval(() => {
            this.update();
            this.draw();
        }, 10);
    }


    update() {
        this.score.update();
        this.player.update();
        this.obstacle.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.bg.draw();
        this.player.draw();
        this.obstacle.draw();
        this.score.draw();
    }

    setSoundEffect() {
        var src = 'Sound/soundTrack' + Math.floor(Math.random() * 3.9) + '.mp3';
        this.soundTrack = new sound(src);
        this.soundFallen = new sound('Sound/fallen.mp3');
    }

    stop() {
        document.exitPointerLock();
        clearTimeout(this.stopGame);
        setTimeout(() => {
            $('.play-again').show()
        }, 1000)

    }

}

var g = new game();

// set event listener for button
btnPlayGame();
btnPlayAgain();

function btnPlayGame() {

    $('.play-game').click(() => {
        canvas.requestPointerLock();
        $('.introduce').hide();
        $('canvas').show();
        g.loop();
    });
}

function btnPlayAgain() {

    $('.play-again').click(function () {
        canvas.requestPointerLock();
        g = new game();
        $(this).hide();
        g.loop();
    });
}



