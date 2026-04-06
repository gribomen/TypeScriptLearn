class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = "CustomError";
    }
}
const url = "https://dummyjson.com/us";
function isSuccess(response) {
    if (response.ok == true) {
        return;
    }
    else if (response.status == 404) {
        throw new CustomError("Запрос не выполнен, страница не обнаружена", 404);
    }
    throw new Error("Неизвестная ошибка");
}
async function getResponse(url) {
    const response = await fetch(url);
    try {
        isSuccess(response);
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
        if (error instanceof CustomError) {
            console.log(`Код ошибки ${error.code}, сообщение: ${error.message}`);
        }
        if (error instanceof Error && !(error instanceof CustomError)) {
            console.log(`Error: ${error.message}`);
        }
    }
}
getResponse(url);
export {};
//# sourceMappingURL=app.js.map