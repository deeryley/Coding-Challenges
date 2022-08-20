function adjacentElementsProduct(inputArray) {
  var items = inputArray[0] * inputArray[1];

  for (var i = 0; i < inputArray.length - 1; i++) {
    items =
      inputArray[i] * inputArray[i + 1] >= items
        ? inputArray[i] * inputArray[i + 1]
        : items;
  }
  return items;
}
