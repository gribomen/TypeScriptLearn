"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(skills) {
        this.skills = skills;
    }
    addSkill(skills) {
        if (typeof skills == 'string') {
            this.skills.push(skills);
        }
        else {
            this.skills = this.skills.concat(skills);
        }
    }
}
const user = new User(['3']);
user.addSkill(['1', '2']);
console.log(user);
function run(distance) {
    if (typeof distance == 'number') {
        return 1;
    }
    else {
        return '';
    }
}
//# sourceMappingURL=app.js.map