"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    a: 1,
    b: 2
};
function swapKeysAndValues(obj) {
    const obj2 = {};
    Object.keys(obj).forEach(item => obj2[obj[item]] = item);
    return obj2;
}
const res = swapKeysAndValues(obj);
console.log(res);
//# sourceMappingURL=app.js.map