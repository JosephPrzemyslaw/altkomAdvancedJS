// Wygnereuj losowe kolorowe okrgi na płótnie
import cfg from "./cfg.js";

class App {
    #ctx;
    #figuresDefArr = [];
    #figuresInstArr = [];

    async initialize() {
        try {
            this.#createCanvas();
            await this.#fetchFigureDef();
            this.#createFigures();
            this.#drawFigures();
        } catch(err) {
            console.error(err.message);
        }
    }
    #createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.width = cfg.width;
        canvas.height = cfg.height;
        this.#ctx = canvas.getContext("2d");

        const mountingPoint = document.getElementById(cfg.mountingPoint);
        mountingPoint.append(canvas);
    }
    #setRandomFigDef() {
        const figureDef = {
            "figures": [],
        };

        for(let shapeDescr of cfg.figures) {
            for (let j = 0; j < shapeDescr.no; j++) {
                figureDef.figures.push(shapeDescr.getSkel(cfg.width, cfg.height));
            }
        }

        this.#figuresDefArr = figureDef;
    }
    async #setAPIFigDef() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!response.ok) throw new Error(`Backend issue: ${response.status}`);
        const json = await response.json();

        this.#figuresDefArr = json;
    }
    // example output returned by a server or generated in a "random" case
    // {
    //     "figures": [{
    //         "type": "circle",
    //         "x": 100,
    //         "y": 200,
    //         "radious": 30,
    //         "color": "blue"
    //     }, {
    //         "type": "rect",
    //         "x": 100,
    //         "y": 200,
    //         "width": 70,
    //         "height": 30,
    //         "color": "green"
    //     },
    //     {...}
    //    ]
    // }
    async #fetchFigureDef() {
        switch(cfg.target.toLowerCase()) {
            case "random":
                this.#setRandomFigDef();
                break;
            case "api":
                await this.#setAPIFigDef();
                break;
        }
    }
    #createFigures() {
        for(let singleFigureDef of this.#figuresDefArr.figures) {
            const FigureClass = cfg.figureTypeToClassNameMap.get(singleFigureDef.type);
            if(FigureClass) {
                const singleFigureDefClone = {...singleFigureDef};
                delete singleFigureDefClone["type"];
                const figureProps = {
                    ctx: this.#ctx,
                    ...singleFigureDefClone,
                };
                this.#figuresInstArr.push(new FigureClass(figureProps));
            }
        }
    }
    #drawFigures() {
        for(let figure of this.#figuresInstArr) {
            figure.draw();
        }
    }
}

new App().initialize();
