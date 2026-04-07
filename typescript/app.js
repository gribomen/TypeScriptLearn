"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(adress, date) {
        super(date);
        this.adress = adress;
    }
}
class ShopDelivery extends Delivery {
    constructor(id) {
        super(new Date());
        this.id = id;
    }
}
class Cart {
    constructor() {
        this.productList = [];
    }
    addProduct(product) {
        this.productList.push(product);
    }
    deleteProduct(id) {
        this.productList = this.productList.filter((p) => p.id !== id);
    }
    calculateCostItems() {
        return this.productList.reduce((sum, product) => sum + product.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        return (this.delivery
            && this.productList.length > 0) ? "Ok" : "";
    }
}
const cart = new Cart();
cart.addProduct({
    name: "1",
    price: 1,
    id: 1
});
cart.addProduct({
    name: "2",
    price: 2,
    id: 2
});
cart.addProduct({
    name: "3",
    price: 3,
    id: 3
});
cart.deleteProduct(1);
cart.calculateCostItems();
cart.setDelivery(new HomeDelivery("sss", new Date("2025/05/03")));
console.log(cart.checkout());
//# sourceMappingURL=app.js.map