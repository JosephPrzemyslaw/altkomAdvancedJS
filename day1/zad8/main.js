// Wygnereuj losowe kolorowe okrgi na płótnie
import cfg from "./cfg.js";
import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";

class App {
    #mountingPoint;
    #circleNo;
    #rectangleNo;
    #rectangleArr;
    #circleArr;
    #ctx;

    constructor(circleNo, rectangleNo, mountingPoint) {
        this.#mountingPoint = mountingPoint;
        this.#circleNo = circleNo;
        this.#rectangleNo = rectangleNo;

        this.#createCanvas();

        this.#createFigures();
        this.#drawFigures();
    }
    #createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.width = cfg.width;
        canvas.height = cfg.height;
        this.#ctx = canvas.getContext("2d");

        const mountingPoint = document.getElementById(this.#mountingPoint);
        mountingPoint.append(canvas);
    }
    #createFigures() {
        this.#circleArr = [];
        for (let i = 0; i < this.#circleNo; i++) {
            // x, y, radious, color
           this.#circleArr[i] = Circle.getRandom(this.#ctx, cfg.width, cfg.height);
        }

        this.#rectangleArr = [];
        for (let i = 0; i < this.#rectangleNo; i++) {
            // x, y, width, height, color
           this.#rectangleArr[i] = Rectangle.getRandom(this.#ctx, cfg.width, cfg.height);
        }
    }
    #drawFigures() {
        for(let i = 0; i < this.#circleArr.length; i++) {
            const circle = this.#circleArr[i];
            circle.draw();
        }
        for(let i = 0; i < this.#rectangleArr.length; i++) {
            const rectangle = this.#rectangleArr[i];
            rectangle.draw();
        }
    }
}

new App(100, 50, "mounting-point")
