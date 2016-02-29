import js from './js.js';

export default {
    sqrt(x,y) {
        if (js.sqrt(x,y).length > 0) {
            return ["math.Sqrt(" + x + ")"];
        }
        return [];
    }
};

