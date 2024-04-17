const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
  }
  console.log(data);
  const array = data.trim().split(/\s+/).map(Number);
  const count = { value: 0 };
  let sortBubble = bubbleSort(array, array.length, count);
  console.log(`Bubble Sort : [${sortBubble}] en ${count.value} comparaisons`);
  const sCount = { value: 0 };
  let sortInsert = insertSort(array, array.length, sCount);
  console.log(`Insert Sort : [${sortInsert}]en ${sCount.value} comparaisons`);
  const tCount = { value: 0 };
  let sortSelect = selectSort(array, array.length, tCount);
  console.log(`Select Sort : [${sortSelect}]en ${tCount.value} comparaisons`);
  const qCount = { value: 0 };
  let quickSelect = quickSort(array, array.length, qCount);
  console.log(`Quick Sort : [${quickSelect}]en ${qCount.value} comparaisons`);
});

const bubbleSort = (arr, n, count) => {
  if (n === 1 || n === 0) {
    return arr;
  }

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      count.value++;
    }
  }
  return bubbleSort(arr, n - 1, count);
};

const insertSort = (arr, n, count) => {
  if (n === 1 || n === 0) {
    return arr;
  }
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    count.value++;
  }
  return arr;
};

const selectSort = (arr, n, count) => {
  for (j = 0; j < n - 1; j++) {
    let iMin = j;
    for (i = j + 1; i < n; i++) {
      if (arr[i] < arr[iMin]) {
        iMin = i;
      }
      if (iMin != j) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      count.value++;
    }
  }
  return arr;
};

const quickSort = (arr, n, count) => {
  if (n <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < n; i++) {
    count.value++;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let sortedLeft = [];
  if (left.length > 0) {
    sortedLeft = quickSort(left, left.length, count);
  }
  let sortedRight = [];
  if (right.length > 0) {
    sortedRight = quickSort(right, right.length, count);
  }
  return sortedLeft.concat(pivot, sortedRight);
};
