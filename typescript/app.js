"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode[statusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    statusCode["FAILED"] = "f";
})(statusCode || (statusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: statusCode.SUCCESS
};
// 's' - успех
// 'p' - в процессе
// 'f' - отклонён
if (res.statusCode === statusCode.SUCCESS) {
}
function action(status) {
}
action(statusCode.SUCCESS);
action(1);
//action(2);
//action('p');
function compute() {
    return 3;
}
//enum Roles {
//    ADMIN = 1,
//    USER = compute()
//}
//function test(x: { ADMIN: number }) {
//}
//test(Roles);
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
const res2 = Roles.ADMIN;
//# sourceMappingURL=app.js.map