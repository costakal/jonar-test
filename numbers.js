const ones = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const digitsToText = (input) => {
  const arr = input.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  let output = "";

  if (arr.length === 3) {
    const hundredPosition = arr[0];
    const tenPosition = arr[1];
    const onePosition = arr[2];

    output = `${ones[hundredPosition]} hundred`;

    if (onePosition === 0 && tenPosition === 0) {
      return output;
    } else if (tenPosition === 1) {
      output = `${output} ${teens[onePosition]}`;
    } else if (tenPosition === 0) {
      output = `${output} and ${ones[onePosition]}`;
    } else if (onePosition === 0) {
      output = `${output} ${tens[tenPosition]}`;
    } else {
      output = `${output} ${tens[tenPosition]} ${ones[onePosition]}`;
    }
  } else if (arr.length === 2) {
    const tenPosition = arr[0];
    const onePosition = arr[1];

    if (tenPosition === 1) {
      const teenPosition = arr[1];
      output = teens[teenPosition];
    } else if (onePosition === 0) {
      output = tens[tenPosition];
    } else {
      output = `${tens[tenPosition]} ${ones[onePosition]}`;
    }
  } else if (arr.length === 1) {
    const onePosition = arr[0];
    output = ones[onePosition];
  }

  if (input > 999 || input < 0) {
    return "Oops, the number must be between 0 and 999";
  }

  return output;
};

console.log(digitsToText(120));

// Loop to test all values are correct.

// for (let i = 0; i < 1000; i++) {
//   console.log(digitsToText(i));
// }

// first attempt which was functioning but needs some clean up

//   const digitsToText = (input) => {
//     // takes the input and stores in an array as a number.
//     // Integer needs to be converted to string before it can be split apart and pushed into an array.
//     const arr = input.toString().split("");
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = parseInt(arr[i]);
//     }

//     let output = "";

//     // conditional that checks for length of number. Nested conditionals are based on certain conditions relative to the number being printed.
//     if (arr.length === 3) {
//       const hundredPosition = arr[0];
//       const tenPosition = arr[1];
//       const onePosition = arr[2];
//       // this sets the hundreth place to the appropriate number and adds a string
//       arr[0] = `${ones[hundredPosition]} hundred`;
//       output = `${ones[hundredPosition]} hundred`;
//       // this condition removes the final two digits from the array if it ends in two 0's. ex: 200
//       if (arr[2] === 0 && arr[1] === 0) {
//         arr.pop();
//         arr.pop();
//         // this condition checks if there is a one in the tens place indicating to replace with the teens array remove the final value in the ones place
//       } else if (arr[1] === 1) {
//         arr[1] = teens[arr[2]];
//         arr.pop();
//         // this condition checks if t
//       } else if (arr[1] === 0) {
//         arr.splice(1, 1);
//         arr[1] = `and ${ones[onePosition]}`;
//       } else if (arr[2] === 0) {
//         arr[1] = tens[tenPosition];
//         arr.pop();
//       } else {
//         arr[1] = tens[tenPosition];
//         arr[2] = ones[onePosition];
//       }
//     } else if (arr.length === 2) {
//       const tenPosition = arr[0];
//       const onePosition = arr[1];
//       if (arr[0] === 1) {
//         const teenPosition = arr[1];
//         arr[0] = teens[teenPosition];
//         arr.pop();
//       } else if (arr[1] === 0) {
//         arr[0] = tens[tenPosition];
//         arr.pop();
//       } else {
//         arr[0] = tens[tenPosition];
//         arr[1] = ones[onePosition];
//       }
//     } else if (arr.length === 1) {
//       const onePosition = arr[0];
//       arr[0] = ones[onePosition];
//     }

//     if (input > 999 || input < 0) {
//       return "Oops, the number must be between 0 and 999";
//     }
//     return arr.join(" ");
//   };

//   console.log(digitsToText(120));

//   // Loop that checks if all value are correct.

//   // for (let i = 0; i < 1000; i++) {
//   //   console.log(digitsToText(i));
//   // }
