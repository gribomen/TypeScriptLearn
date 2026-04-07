"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    constructor(id) { }
    create() {
        UserService.db;
    }
}
(() => {
})();
UserService.getUser(1);
const inst = new UserService(1);
inst.create();
//# sourceMappingURL=app.js.map