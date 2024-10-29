import { getRandomNo } from "./common.js";
import constants from "./constants.js";

export class Rectangle {
    constructor({ctx, x, y, width, height, color}) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width,
        this.height = height,
        this.color = color;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    static getRandom(ctx, maxWidth, maxHeight) {
        const maxSize = 50;

        return new Rectangle({
            ctx,
            x: getRandomNo(maxWidth),
            y: getRandomNo(maxHeight),
            width: getRandomNo(maxSize),
            height: getRandomNo(maxSize),
            color: constants.allowedColors[Math.floor(Math.random() * constants.allowedColors.length)]
    });
    }
}
