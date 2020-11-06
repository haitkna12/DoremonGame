
class obstacle {
    constructor(game) {
        this.game = game;
        this.bullets = [];
        this.walls = [];

        this.initBullets();
        this.initWalls();
    }

    initWalls() {
        for (let i = 0; i < NUM_WALL; i++) {
            this.newWall();
        }
    }

    newWall() {


        var pairWall = [];

        // create bottom wall--------------------------------------

        var size = {
            x: SIZE_X_WALL,
            y: Math.floor(Math.random() * 200 + 50),
        }

        var pos = {
            x: SCREEN_WIDTH,
            y: SCREEN_HEIGHT - size.y,
        }

        if (this.walls.length > 0) {
            pos.x = this.walls[this.walls.length - 1][0].pos.x + GAP_WALL;
            pos.x = this.walls[this.walls.length - 1][1].pos.x + GAP_WALL;
        }

        var newWallBottom = new wall(this.game, 'wallBottom', pos, size);

        pairWall.push(newWallBottom);

        // create top wall------------------------------------------

        size.y = Math.floor(Math.random() * (MAX_GAP - MIN_GAP) + (SCREEN_HEIGHT - size.y - MAX_GAP));
        pos.y = 0;

        var newWallTop = new wall(this.game, 'wallTop', pos, size);
        pairWall.push(newWallTop);

        this.walls.push(pairWall);
    }

    interChangeWalls() {
        if (this.walls[0][0].isPass == true) {
            this.walls.splice(0, 1);
            this.newWall();
        }
    }


    initBullets() {
        for (let i = 0; i < NUM_BULLET; i++) {
            this.newBullet();
        }
    }

    newBullet() {
        let newBullet = new bullet(this.game);
        this.bullets.push(newBullet);
    }

    interChangeBullets() {
        for (let i = 0; i < NUM_BULLET; i++) {
            if (this.bullets[i].isPass == true) {
                this.bullets.splice(i, 1);
                this.newBullet();
            }
        }

    }

    update() {
        // bullet
        this.interChangeBullets();
        this.bullets.forEach((bullet) => {
            bullet.update();
        });
        // wall
        this.interChangeWalls();
        this.walls.forEach((wall) => {
            wall.forEach((e) => {
                e.update();
            })
        })
    }

    draw() {
        // bullet
        this.bullets.forEach((bullet) => {
            bullet.draw();
        });
        // wall
        this.walls.forEach((wall) => {
            wall.forEach((e) => {
                e.draw();
            })
        })

    }

  
}