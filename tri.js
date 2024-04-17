const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
  }
  console.log(`Liste de Base : ${data}`);
  const count = { value: 0 };
  const array = data.trim().split(/\s+/).map(Number);
  console.log(
    `Liste ordonee : ${mergeSort(array, count)}, en ${count.value} iterations`,
  );
});

const mergeSort = (array, count) => {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left, count), mergeSort(right, count), count);
};
const merge = (left, right, count) => {
  let result = [];
  let leftIndex = 0;

  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    count.value++;
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};
