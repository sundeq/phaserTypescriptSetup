import 'phaser';

const config: GameConfig = {
    title: 'MyPhaserGame',
    width: 640,
    height:480,
    parent: 'game',
    backgroundColor: '#000080'
};

export class MyPhaserGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new MyPhaserGame(config);
};