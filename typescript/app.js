"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(date, message) {
        this.printDate(date);
        this.log(message);
    }
}
const r = new RealLogger();
r.logWithDate(new Date(), "сообщение века");
//# sourceMappingURL=app.js.map