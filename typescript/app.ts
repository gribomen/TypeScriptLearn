enum RequestType {
    GET = 'get',
    POST = 'post'
}

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth("s", "get");
//fetchWithAuth("s", "s");

let a: 'sdfefw' = 'sdfefw';

let method = '3';
method = 'post';

fetchWithAuth('s', method as 'post')