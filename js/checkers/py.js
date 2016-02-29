import js from './js.js';

export default {
    stringLength(x,y) {
        if (js.stringLength(x,y).length > 0) {
            return [`len("${x}")`];
        }
        return [];
    }
};

