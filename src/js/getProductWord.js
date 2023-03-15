export default function getProductWord(productQuantity) {
  if (Math.floor(productQuantity / 10) != 1 && productQuantity % 10 === 1) {
    return "товар";
  } else if (
    Math.floor(productQuantity / 10) != 1 &&
    (productQuantity % 10 === 2 ||
      productQuantity % 10 === 3 ||
      productQuantity % 10 === 4)
  ) {
    return "товара";
  }

  return "товаров";
}
