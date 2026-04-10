"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const res = new Resp('data');
res.error;
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res2 = new HTTPResp('data');
//# sourceMappingURL=app.js.map