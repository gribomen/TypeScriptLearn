abstract class Logger {
    abstract log(message: string): void;
    printDate(date: Date) {
        this.log(date.toString())
    }
}

class RealLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(date: Date, message: string): void {
        this.printDate(date);
        this.log(message);
    }
}

const r = new RealLogger();
r.logWithDate(new Date(), "сообщение века");