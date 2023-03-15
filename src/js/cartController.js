import getProductWord from "./getProductWord";

export default class CartController {
  constructor(container, cart) {
    this.container = container;
    this.cart = cart;
  }

  drawUi() {
    const sectionCartHeaderClearEl =
      this.container.querySelector("#cart__clear");
    sectionCartHeaderClearEl.addEventListener("click", () => {
      this.cart.clear();
      this.drawUi();
    });

    const productsListEL = this.container.querySelector("#products-list");
    productsListEL.innerHTML = "";

    this.cart.products.forEach((product) => {
      productsListEL.appendChild(this.getProductItem(product));
    });

    this.setProductsQuantity();
    this.toggleInstallation();
    this.setProductsSum();
    this.addButtonsEventListener();
  }

  toggleInstallation() {
    const installationCheckboxEl = this.container.querySelector(
      "#installation__checkbox"
    );
    const installationStatus = this.container.querySelector(
      "#installation__status"
    );
    installationCheckboxEl.addEventListener("click", (event) => {
      if (event.target.checked) {
        installationStatus.textContent = "Да";
      } else {
        installationStatus.textContent = "Нет";
      }
    });
  }

  getProductItem(product) {
    const productItemEL = document.createElement("div");
    productItemEL.classList.add("product-item");

    const productItemImgEl = document.createElement("div");
    productItemImgEl.classList.add("product-item__img", product.img);

    productItemEL.appendChild(productItemImgEl);
    productItemEL.appendChild(this.getProductItemInfo(product));
    productItemEL.appendChild(this.getProductItemCounter(product));
    productItemEL.appendChild(this.getProductItemPrice(product));
    productItemEL.appendChild(this.getProductItemDelete(product));

    return productItemEL;
  }

  getProductItemInfo(product) {
    const productItemInfoEl = document.createElement("div");
    productItemInfoEl.classList.add("product-item__info");

    const productItemInfoTitleEL = document.createElement("h3");
    productItemInfoTitleEL.classList.add("product-item__info-title");
    productItemInfoTitleEL.textContent = product.name;
    productItemInfoEl.appendChild(productItemInfoTitleEL);

    const productItemInfoContentEL = document.createElement("div");
    productItemInfoContentEL.classList.add("product-item__info-content");
    productItemInfoContentEL.textContent = product.description;
    productItemInfoEl.appendChild(productItemInfoContentEL);

    const productItemArticleNumberEL = document.createElement("div");
    productItemArticleNumberEL.classList.add("product-item__article-number");
    productItemArticleNumberEL.textContent = `Артикул: ${product.articleNumber}`;
    productItemInfoEl.appendChild(productItemArticleNumberEL);

    return productItemInfoEl;
  }

  getProductItemCounter(product) {
    const productItemCounterEl = document.createElement("div");
    productItemCounterEl.classList.add("product-item__counter");
    const productItemCounterMinusEl = document.createElement("button");
    productItemCounterMinusEl.classList.add("product-item__counter-minus");
    productItemCounterEl.appendChild(productItemCounterMinusEl);

    const productItemCounterQuantityEl = document.createElement("div");
    productItemCounterQuantityEl.classList.add(
      "product-item__counter-quantity"
    );
    productItemCounterQuantityEl.textContent = product.quantity;
    productItemCounterEl.appendChild(productItemCounterQuantityEl);

    const productItemCounterPlusEl = document.createElement("button");
    productItemCounterPlusEl.classList.add("product-item__counter-plus");
    productItemCounterEl.appendChild(productItemCounterPlusEl);

    const productItemPriceEl = document.createElement("div");
    productItemPriceEl.classList.add("toggle-Product-Price");
    productItemPriceEl.textContent = `${product.price} ₽/шт.`;
    this.toggleProductPrice(product, productItemPriceEl);
    productItemCounterEl.appendChild(productItemPriceEl);

    productItemCounterMinusEl.addEventListener("click", () => {
      product.decreaseQuantity();
      this.updateProduct(
        product,
        productItemCounterQuantityEl,
        productItemCounterMinusEl,
        productItemPriceEl
      );
    });

    productItemCounterPlusEl.addEventListener("click", () => {
      product.increaseQuantity();
      this.updateProduct(
        product,
        productItemCounterQuantityEl,
        productItemCounterMinusEl,
        productItemPriceEl
      );
    });

    return productItemCounterEl;
  }

  updateProduct(
    product,
    productItemCounterQuantityEl,
    productItemCounterMinusEl,
    productItemPriceEl
  ) {
    productItemCounterQuantityEl.textContent = product.quantity;

    if (product.quantity === 0) {
      productItemCounterMinusEl.setAttribute("disabled", "true");
    } else if (
      product.quantity > 0 &&
      productItemCounterMinusEl.getAttribute("disabled")
    ) {
      productItemCounterMinusEl.removeAttribute("disabled");
    }

    this.setProductSum(product, productItemPriceEl);
    this.toggleProductPrice(product, productItemPriceEl);
    this.setProductsSum();
    this.setProductsQuantity();
  }

  toggleProductPrice(product, productPriceEl) {
    productPriceEl.style.display = product.quantity > 1 ? "block" : "none";
  }

  setProductSum(product, productPriceEl) {
    const productItemEl = productPriceEl.closest(".product-item");
    const productItemSumEl = productItemEl.querySelector(
      ".product-item__price"
    );
    productItemSumEl.textContent = product.getSum() || product.price;
  }

  setProductsSum() {
    const informationCartAllPriceEl = this.container.querySelector(
      ".information-cart__full-price"
    );
    const orderAmountAllPriceEl = this.container.querySelector(
      "#order-amount__full-price"
    );
    const costGoodsAllPriceEl = this.container.querySelector(
      "#cost-goods__full-price"
    );
    informationCartAllPriceEl.textContent =
      orderAmountAllPriceEl.textContent =
      costGoodsAllPriceEl.textContent =
        this.cart.getSum();
  }

  setProductsQuantity() {
    const productQuantityEl = this.container.querySelector("#product-quantity");
    const informationCartProductsQuantityEl = this.container.querySelector(
      "#information-cart__products-quantity"
    );
    const quantityGoodsQuantityEl = this.container.querySelector(
      "#quantity-goods__quantity"
    );
    const quantity = this.cart.getProductQuantity();
    productQuantityEl.textContent =
      informationCartProductsQuantityEl.textContent = `${quantity} ${getProductWord(
        quantity
      )}`;
    quantityGoodsQuantityEl.textContent = `${quantity} шт`;
  }

  getProductItemPrice(product) {
    const productItemPriceEl = document.createElement("div");
    productItemPriceEl.classList.add("product-item__price", "rub");
    productItemPriceEl.textContent = product.getSum();

    return productItemPriceEl;
  }

  getProductItemDelete(product) {
    const productItemDeleteEl = document.createElement("div");
    productItemDeleteEl.classList.add("product-item__delete");

    productItemDeleteEl.addEventListener("click", () => {
      this.cart.deleteProduct(product.id);
      this.drawUi();
    });

    return productItemDeleteEl;
  }

  addButtonsEventListener() {
    const primaryEl = this.container.querySelector("#primary");
    const secondaryEl = this.container.querySelector("#secondary");

    primaryEl.addEventListener("click", () => {
      this.sendRequest();
    });

    secondaryEl.addEventListener("click", () => {
      this.sendRequest();
    });
  }

  sendRequest() {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === xhr.DONE) {
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    });

    xhr.open("POST", "http://localhost:8080");
    xhr.send(JSON.stringify(this.cart));
  }
}
