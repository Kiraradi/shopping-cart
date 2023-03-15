import getProductWord from "../getProductWord";

test.each([
  ['test function getProductWord 1', 1, "товар"],
  ['test function getProductWord 2', 5, "товаров"],
  ['test function getProductWord 3', 3, "товара"],
  ['test function getProductWord 4', 11, "товаров"],
  ['test function getProductWord 5', 25, "товаров"],
  ['test function getProductWord 6', 38, "товаров"],
  ['test function getProductWord 7', 7, "товаров"],
  ['test function getProductWord 9', 31, "товар"],
])('%s', (testName, data, rigthResult) => {
  expect(getProductWord(data)).toBe(rigthResult);
});

