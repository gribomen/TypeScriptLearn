"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Вася');
console.log(user);
user.name = 'Петя';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
//# sourceMappingURL=app.js.map