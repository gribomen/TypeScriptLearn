"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Вася');
const res2 = new AdminBuilder().setName('Вася');
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
//# sourceMappingURL=app.js.map