const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(arr)  {
  console.log(arr[0]);
}

firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function howLong(arr)  {
  console.log(arr.length);
}

getLength(items, howLong);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function lastItem(arr)  {
  console.log(arr[arr.length - 1]);
}

last(items, lastItem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function add(a, b)  {
  console.log(a + b);
}

sumNums(3, 5, add);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiply(a, b)  {
  console.log(a * b);
}

sumNums(3, 5, multiply);

/* STRETCH PROBLEMS */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
