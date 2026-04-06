"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class ParsistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Сохраняет базу
    }
    pay(date) {
        //super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new ParsistedPayment();
//# sourceMappingURL=app.js.map