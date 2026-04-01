"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(firstname, surname) {
    //Таким непотребством больше не занимаемся
    //if (typeof firstname !== 'string') {
    //    return new Error("!!!");
    //}
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName("Гриб", "Вячеслав"));
//# sourceMappingURL=app.js.map