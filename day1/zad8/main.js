// Wygnereuj losowe kolorowe okrgi na płótnie
import cfg from "./cfg.js";

class App {
    #ctx;
    #figures = new Map;

    constructor() {
        this.#createCanvas();
        this.#createFigures();
        this.#drawFigures();
    }
    #createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.width = cfg.width;
        canvas.height = cfg.height;
        this.#ctx = canvas.getContext("2d");

        const mountingPoint = document.getElementById(cfg.mountingPoint);
        mountingPoint.append(canvas);
    }
    #createFigures() {
        const figures = Object.keys(cfg.figures);
        for(let figureName of figures) {
            // e.g. figureName -> {circle}
            const figureDef = cfg.figures[figureName]; // e.g {no: 100, className: Circle}
            const figureArr = [];
            for (let j = 0; j < figureDef.no; j++) {
                figureArr.push(figureDef.create(this.#ctx, cfg.width, cfg.height));
            }
            this.#figures.set(figureName, figureArr);
        }
    }
    #drawFigures() {
        for(let [_, figureArr] of this.#figures) {
            for(let figureInst of figureArr) {
                figureInst.draw();
            }
        }
    }
}

new App();
