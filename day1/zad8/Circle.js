import { getRandomNo } from "./common.js";
import constants from "./constants.js";

export class Circle {
    constructor({ctx, x, y, radious, color}) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radious = radious,
        this.color = color;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radious, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    static getSkeleton(maxWidth, maxHeight) {
        const maxRadious = 30;

        return {
            type: "circle",
            x: getRandomNo(maxWidth),
            y: getRandomNo(maxHeight),
            radious: getRandomNo(maxRadious),
            color: constants.allowedColors[Math.floor(Math.random() * constants.allowedColors.length)]
        };
    }
}
