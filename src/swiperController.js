import Swiper, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default class SwiperController {
  constructor(container, viewedProducts) {
    this.container = container;
    this.viewedProducts = viewedProducts;
  }

  drawUi() {
    const swiperEl = document.createElement("div");
    swiperEl.classList.add("swiper");
    swiperEl.innerHTML = '<div class="swiper-button-prev"></div> <div class="swiper-button-next"></div>';

    const swiperWrapperEl = document.createElement("div");
    swiperWrapperEl.classList.add("swiper-wrapper");
    this.viewedProducts.forEach((product) =>
      swiperWrapperEl.appendChild(this.getProductItem(product))
    );
    swiperEl.appendChild(swiperWrapperEl);

    swiperEl.innerHTML += '<div class="swiper-pagination"></div>';

    this.container.appendChild(swiperEl);
    this.createSwiper();
  }

  getProductItem(product) {
    const swiperSlideEl = document.createElement("div");
    swiperSlideEl.classList.add("swiper-slide", "card");

    const cardProducImgEl = document.createElement("div");
    cardProducImgEl.classList.add(product.img, "card-product-img");
    swiperSlideEl.appendChild(cardProducImgEl);

    swiperSlideEl.appendChild(this.getCartTextContentEl(product));
    swiperSlideEl.appendChild(this.getPriceEl(product));

    const cardProductButtonEl = document.createElement("button");
    cardProductButtonEl.classList.add("card-product-button");
    cardProductButtonEl.textContent = `Подробнее`;
    swiperSlideEl.appendChild(cardProductButtonEl);

    return swiperSlideEl;
  }

  getCartTextContentEl(product) {
    const cartTextContent = document.createElement("div");
    cartTextContent.classList.add("cart-text-content");

    const cardProductNameEl = document.createElement("div");
    cardProductNameEl.classList.add("card-product-name");
    cardProductNameEl.textContent = product.name;
    cartTextContent.appendChild(cardProductNameEl);

    const cardProductdescriptionEl = document.createElement("div");
    cardProductdescriptionEl.classList.add("card-product-description");
    cardProductdescriptionEl.textContent = product.description;
    cartTextContent.appendChild(cardProductdescriptionEl);

    return cartTextContent;
  }

  getPriceEl(product) {
    const cardProductPriceEl = document.createElement("div");
    cardProductPriceEl.classList.add("card-product-price");

    const cardProductPriceRubEl = document.createElement("div");
    cardProductPriceRubEl.innerHTML = `<span class="rub">${product.minPriceRub}</span> - <span class="rub">${product.maxPriceRub}</span>`;
    cardProductPriceEl.appendChild(cardProductPriceRubEl);

    const cardProductPriceEuEl = document.createElement("div");
    cardProductPriceEuEl.innerHTML = `<span class="eu">${product.minPriceEu}</span> - <span class="eu">${product.maxPriceEu}</span>`;
    cardProductPriceEl.appendChild(cardProductPriceEuEl);

    return cardProductPriceEl;
  }

  createSwiper() {
    const swiperEl = this.container.querySelector(".swiper");
    const swiperPaginationEl =
      this.container.querySelector(".swiper-pagination");
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 4,
      spaceBetween: 20,
      modules: [Pagination, Navigation],
      pagination: {
        el: swiperPaginationEl,
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
