const companyCode = 552351;

const createCheckDigit = (productCode) => {
  // convert integer into a string to combine both digits, split into and array and turned back into a number *** SEE NOTE BELOW ***
  const combineInt = `${companyCode}${productCode}`;
  const upc = combineInt.split("").map((num) => parseInt(num));

  let even = 0;
  let odd = 0;

  for (let i = 0; i < upc.length; i++) {
    if (i % 2 === 0) {
      even += upc[i];
    } else {
      odd += upc[i];
    }
  }

  const remainder = (even * 3 + odd) % 10;

  if (remainder !== 0) {
    return parseInt(`${combineInt}${10 - remainder}`);
  } else {
    return parseInt(`${combineInt}${0}`);
  }
};

console.log(createCheckDigit(11111));

//NOTE: Workaround for leading 0.
// When inputting data the number for company/product code would need to be input as a string
// An integer stating with a 0 is not recognized.
