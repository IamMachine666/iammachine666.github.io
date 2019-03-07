const gravityY = 300;
var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var globalStrings = {
	arcade: 'arcade',
	sky: 'sky',
	ground: 'ground',
	star: 'star',
	bomb: 'bomb',
	player: 'player'
};

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: gravityY },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);