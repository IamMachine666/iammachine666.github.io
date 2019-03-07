function preload ()
{
    this.load.image(globalStrings.sky, 'assets/sky.png');
    this.load.image(globalStrings.ground, 'assets/platform.png');
    this.load.image(globalStrings.star, 'assets/star.png');
    this.load.image(globalStrings.bomb, 'assets/bomb.png');
    this.load.spritesheet(globalStrings.player, 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}