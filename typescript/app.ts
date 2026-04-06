class CustomError extends Error {
    code: number;

    constructor(message: string, code: number) {
        super(message);
        this.code = code;
        this.name = "CustomError";
    }
}


enum Status {
    CONTINUE = 200,
    ERROR = 404
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Object;
    ip: string;
    address: Object;
    macAddress: string;
    university: string;
    bank: Object;
    company: Object;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Object;
    role: string;

}

interface IResponse {
    status: Status;
    ok: boolean;
    json(): Promise<any>;
}

interface IResponseSuccess extends IResponse {
}

interface IResponseReject extends IResponse {
}

const url = "https://dummyjson.com/users";

function isSuccess(response: IResponseSuccess | IResponseReject): asserts response is IResponseSuccess {

    if (response.ok == true) {
        return;
    } else if (response.status == 404) {
        throw new CustomError("Запрос не выполнен, страница не обнаружена", 404);
    }
    throw new Error("Неизвестная ошибка");
}

async function getResponse(url: string) {
    const response: IResponse = await fetch(url);

    try {
        isSuccess(response);
        const result: User[] = await response.json();
        console.log(result);

    } catch (error: any) {
        if (error instanceof CustomError) {
            console.log(`Код ошибки ${error.code}, сообщение: ${error.message}`);
        }
        if (error instanceof Error && !(error instanceof CustomError)) {
            console.log(`Error: ${error.message}`);
        }

    }

}

getResponse(url);