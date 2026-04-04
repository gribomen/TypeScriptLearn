"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 Вариант
//interface IPaymentResponse {
//    status: "success" | "failed",
//    data: IPaymentResponseAccept | IPaymentResponseReject
//}
//interface IPaymentResponseAccept extends IPayment {
//    databaseId: number,
//}
//interface IPaymentResponseReject {
//    errorMessage: string,
//    errorCode: number
//}
var PaymenStatus;
(function (PaymenStatus) {
    PaymenStatus["SUCCESS"] = "success";
    PaymenStatus["FAILED"] = "failed";
})(PaymenStatus || (PaymenStatus = {}));
//function get(): IResponseSuccess | IResponseFailed{
//}
//# sourceMappingURL=app.js.map