enum statusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED = 'f'
}

const res = {
    message: 'Платеж успешен',
    statusCode: statusCode.SUCCESS
}


// 's' - успех
// 'p' - в процессе
// 'f' - отклонён


if (res.statusCode === statusCode.SUCCESS) {

}


function action(status: statusCode) {

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

const enum Roles {
    ADMIN = 1,
    USER = 2
}

const res2 = Roles.ADMIN;