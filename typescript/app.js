"use strict";
//interface User {
//    login: string;
//    password?: string;
//}
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    login: 'a@a.ru'
};
function multiply(first, second) {
    if (second) {
        return first * second;
    }
    return first;
}
multiply(5);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
//# sourceMappingURL=app.js.map