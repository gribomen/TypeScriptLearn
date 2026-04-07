"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User('Вася'));
users.push(new User('Петя'));
console.log(users.toString());
class UserList {
    push(u) {
        this.users.push(u);
    }
}
class Payment {
}
class UserWithPayment extends Payment {
}
//Правильная композиция
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
//# sourceMappingURL=app.js.map