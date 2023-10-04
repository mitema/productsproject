import { productsstoreArray } from "./productstore";

const reduceLettersIfGreatherThan12 = (productName) => {
  if (productName.length > 12) {
    var reducedProductName = productName.substring(0, 13);
    var concatenedProductName = reducedProductName + "...";
    console.log(concatenedProductName);
    return concatenedProductName;
  }
  return productName;
};

const getNumbersAfterDollarSign = (amountWithDollarSign) => {
  console.log(`amountWithDollar : ${amountWithDollarSign}`);
  var amountWithoutDollarSign = amountWithDollarSign.substring(1);
  console.log(`amountWithoutDollarSign: ${amountWithoutDollarSign}`);

  return amountWithoutDollarSign;
};

const getImageName = (digit) => {
  productsstoreArray.map((product) => {
    product.imageUrl == 5;
  });
};

export { reduceLettersIfGreatherThan12, getNumbersAfterDollarSign };
