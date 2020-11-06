
var canvas = document.querySelector('canvas');

canvas.requestPointerLock = canvas.requestPointerLock ||
    canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
    document.mozExitPointerLock;

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
        document.addEventListener('mousemove', updatePos);
    } else {
        document.removeEventListener('mousemove', updatePos);
    }
}

function updatePos(e) {
    g.player.pos = {
        x: g.player.pos.x + e.movementX / 6,
        y: g.player.pos.y + e.movementY / 6,
    }
}

// exit Pointer lock when right click
$('canvas').mousedown(function (e) {
    if (e.which == 3) {
        document.exitPointerLock();
    }
});
// resquest Pointer lock when left click
$('canvas').click(function (e) {
    canvas.requestPointerLock();
})
// hide contextmenu when right click
canvas.oncontextmenu = function () {
    return false;
}

