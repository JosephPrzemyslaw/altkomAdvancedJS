import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";

export default {
    width: 800,
    height: 600,
    figures: {
        circle: {
            create: Circle.getRandom,
            no: 100,
        },
        rect: {
            create: Rectangle.getRandom,
            no: 50,
        },
    },
    mountingPoint: "mounting-point",
}
