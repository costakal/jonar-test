const distributeItems = (numOfBoxes, numOfItems) => {
  const arr = [];

  const dividedNumber = Math.floor(numOfItems / numOfBoxes);
  const remainder = numOfItems % numOfBoxes;

  for (let i = 0; i < numOfBoxes; i++) {
    arr.push(dividedNumber);
  }

  for (let i = 1; i <= remainder; i++) {
    arr[i] = dividedNumber + 1;
  }

  return arr.sort();
};

console.log(distributeItems(7, 222));
