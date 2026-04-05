interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Response = IResponseSuccess | IResponseFailed;

function isSuccess(res: Response): res is IResponseSuccess {
    if (res.status == PaymentStatus.Success) {
        return true;
    }
    return false;
}

function getIdFromData(response: Response): number {
    if (isSuccess(response)) {
        return response.data.databaseId;
    } else {
        throw new Error(`Код ошибки ${response.data.errorCode} \n Сообщение ошибки: ${response.data.errorMessage}`);
    }
}