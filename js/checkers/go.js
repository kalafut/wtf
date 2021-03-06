import js from './js.js';

export default {
    sqrt(x,y) {
        if (js.sqrt(x,y).length > 0) {
            return [`math.Sqrt(${x})`];
        }
        return [];
    },
    stringLength(x,y) {
        if (js.stringLength(x,y).length > 0) {
            return [`len("${x}")`];
        }
        return [];
    }
};

