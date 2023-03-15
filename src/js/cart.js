import Product from "./product";

export default class Cart {
  constructor(obj) {
    this.products = obj.products.map((item) => new Product(item));
    this.installation = false;
  }

  getProductQuantity() {
    return this.products.reduce(
      (productQuantity, product) => productQuantity + product.quantity,
      0
    );
  }

  getSum() {
    return this.products.reduce((sum, product) => sum + product.getSum(), 0);
  }

  deleteProduct(productId) {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId
    );

    if (productIndex >= 0) {
      this.products.splice(productIndex, 1);
    }
  }

  clear() {
    this.products = [];
  }

  toggleInstallation() {
    this.installation = !this.installation;
  }
}
