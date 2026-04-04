//interface User {
//    login: string;
//    password?: string;
//}

type User = {
    login: string;
    password?: string;
}

const user: User = {
    login: 'a@a.ru'
}

function multiply(first: number, second?: number) {
    if (second) {
        return first * second;
    }
    return first;
}

multiply(5);

type UserPro = {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

function test(param?: string) {
    const t = param ?? multiply(5);
}