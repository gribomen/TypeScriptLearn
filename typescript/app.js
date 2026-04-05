"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(res) {
    if (res.status == PaymentStatus.Success) {
        return true;
    }
    return false;
}
function getIdFromData(response) {
    if (isSuccess(response)) {
        return response.data.databaseId;
    }
    else {
        throw new Error(`Код ошибки ${response.data.errorCode} \n Сообщение ошибки: ${response.data.errorMessage}`);
    }
}
//# sourceMappingURL=app.js.map