let a = 5;
let b: string = a.toString();
let e = new String(a);
let str = e.valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'sdad';
let d: number = parseInt(c);


interface User {
    name: string;
    email: string;
    login: string;

}

const user: User = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasia'
}