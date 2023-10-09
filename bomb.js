import Element from './element.js';

export default class Bomb extends Element {
    constructor(position, timeExplode = 5000, radius, assets, gridSize, game) { 
        super(position, assets);

        this.game = game;

        // unique ID function from stackoverflow
        this.ID = '_' + Math.ramdom().toString(36).substr(2, 9);

        this.gridSize = gridSize;
        this.isExploded = false;

        this.timeToExplode = this.timeToExplode;
        this.radius = radius;

        this.spriteSize = {
            bomb: {
                x: 28,
                y: 28,
            },
            fire: {
                x: 38,
                y: 38,
            }
        };

        this.currentAnimationState = 0;

        this.animationSpeed = 20;

        this.animationSheet =  [
            {x: 0, y: 0},
            {x: 28, y: 0},
            {x:2 * 28, y: 0},
            {x: 3 * 28, y: 0},
            {x: 4 * 28, y: 0},
        ];

        // bomb destroy itself after being created
        setTimeout(() => {
            this.animateExplosion();
        }, this.timeToExplode)
    }

    
}

