const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
  }
  console.log(`Liste de Base : ${data}`);
  const array = data.trim().split(/\s+/).map(Number);
  const k = 17;
  // Sujet 1
  let firstExoFirst = findSumImb(array, k);
  console.log(`Sujet 1, Exercice 1 : ${firstExoFirst} (pour k = ${k})`);
  let secondExoFirst = findSum(array, k);
  console.log(`Sujet 1, Exercice 3 : ${secondExoFirst} (pour k = ${k})`);
  let thridExoFirst = findSumOne(array, k);
  console.log(`Sujet 1, Exercice 5 : ${thridExoFirst} (pour k = ${k})`);
  // Sujet 2
  let firstExoSecond = findSeeImb(array);
  console.log(
    `Sujet 2, Exercice 2 : ${firstExoSecond} immeuble(s) on vue sur l'ouest`,
  );
  let secondExoSecond = findSee(array);
  console.log(
    `Sujet 1, Exercice 3 : ${secondExoSecond} immeuble(s) on vue sur l'ouest`,
  );
  let thridExoSecond = findSeeOne(array);
  console.log(
    `Sujet 1, Exercice 5 : ${thridExoSecond} immeuble(s) on vue sur l'ouest`,
  );
});

// Sujet 1

// Exercice 1
const findSumImb = (array, k) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === k) {
        return true;
      }
    }
  }
  return false;
};

// Exercice 3
const findSum = (array, k) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

// Exercice 5
const findSumOne = (array, k) => {
  let seen = new Set();
  for (let i = 0; i < array.length; i++) {
    let diff = k - array[i];
    if (seen.has(diff)) {
      return true;
    }
    seen.add(array[i]);
  }
  return false;
};

// Sujet 2

//  Exercice 2
const findSeeImb = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] >= array[i]) {
        result++;
      }
    }
  }
  return result;
};

// Exercice 4
const findSee = (array) => {
  let result = 0;
  let max = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] >= max) {
      max = array[i];
      result++;
    }
  }
  return result;
};

// Exercice 6
const findSeeOne = (array) => {
  let result = 1;
  let max = array[array.length - 1];
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > max) {
      result++;
      max = array[i];
    }
  }
  return result;
};
