interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IPaymentRequest extends IPayment { }

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

enum PaymenStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IDataSuccess extends IPayment {
    databaseId: number,
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IResponse {
    status: PaymenStatus,
    data: IDataSuccess | IDataFailed
}

interface IResponseSuccess {
    status: PaymenStatus.SUCCESS,
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymenStatus.FAILED,
    data: IDataFailed
}

//function get(): IResponseSuccess | IResponseFailed{

//}