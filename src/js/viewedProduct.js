export default class ViewedProduct {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.img = obj.img;
    this.description = obj.description;
    this.minPriceRub = obj.minPriceRub;
    this.maxPriceRub = obj.maxPriceRub;
    this.minPriceEu = obj.minPriceEu;
    this.maxPriceEu = obj.maxPriceEu;
  }
}
