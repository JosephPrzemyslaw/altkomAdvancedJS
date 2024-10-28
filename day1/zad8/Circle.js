import { getRandomNo } from "./common.js";

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
        this.ctx.arc(this.x,this.y,this.radious, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    static getRandom(ctx, maxWidth, maxHeight) {
        const maxRadious = 30;
        const allowedColors = ["blue", "orange", "green", "Tomato", "MediumSeaGreen", "Violet"];

        return new Circle({
            ctx, // ctx: ctx
            x: getRandomNo(maxWidth),
            y: getRandomNo(maxHeight),
            radious: getRandomNo(maxRadious),
            color: allowedColors[Math.floor(Math.random() * allowedColors.length)]
        });
    }
}
