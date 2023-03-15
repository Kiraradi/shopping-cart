export default class Product {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.img = obj.img;
    this.articleNumber = obj.articleNumber;
    this.quantity = obj.quantity;
    this.price = obj.price;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  getSum() {
    return this.price * this.quantity;
  }
}
