class Cloud extends MovableObject {
    height = 250;
    width = 200;
    Y = 50;



    constructor() {
        super().loadImage('./assets/imgs/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
    }
}