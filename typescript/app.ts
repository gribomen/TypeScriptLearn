type Product = {
    id: number;
    name: string;
    price: number;
}

class Delivery {
    date: Date;
    constructor(date: Date) {
        this.date = date;
    }
}

class HomeDelivery extends Delivery {
    constructor(public adress: string, date: Date) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(public id: number) {
        super(new Date());
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery
class Cart {
    private productList: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product): void {
        this.productList.push(product);

    }

    public deleteProduct(id: number): void {
        this.productList = this.productList.filter((p: Product) => p.id !== id);
    }

    public calculateCostItems(): number {
        return this.productList.reduce((sum: number, product) => sum + product.price, 0)
    }

    public setDelivery(delivery: HomeDelivery | ShopDelivery): void {
        this.delivery = delivery;
    }

    public checkout() {
        return (this.delivery
            && this.productList.length > 0) ? "Ok" : "";
    }
}

const cart = new Cart();
cart.addProduct({
    name: "1",
    price: 1,
    id: 1
})

cart.addProduct({
    name: "2",
    price: 2,
    id: 2
})

cart.addProduct({
    name: "3",
    price: 3,
    id: 3
})

cart.deleteProduct(1);
cart.calculateCostItems();

cart.setDelivery(new HomeDelivery("sss", new Date("2025/05/03")));
console.log(cart.checkout());

