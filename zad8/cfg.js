import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";

export default {
    width: 800,
    height: 600,
    target: "api",
    figureTypeToClassNameMap: new Map([
        ["circle", Circle],
        ["rect", Rectangle]
    ]),
    figures: [{
            type: "circle",
            getSkel: Circle.getSkeleton,
            no: 100,
        },{
            type: "rect",
            getSkel: Rectangle.getSkeleton,
            no: 50,
        }
    ],
    mountingPoint: "mounting-point",
}
