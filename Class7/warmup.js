const arr = [1, 3, 6, 2, 10, 9];

function findArraySummary(array) {
  if (arr === null || arr === undefined) return;
  let outputObj = {
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE,
    sum: 0,
    avg: 0,
  };
  let count = 0;

  for (let i of array) {
    if (outputObj.min > i) {
      outputObj.min = i;
    }
    if (outputObj.max < i) {
      outputObj.max = i;
    }
    outputObj.sum += i;
    count++;
  }

  outputObj.avg = outputObj.sum / count;

  return outputObj;
}

function findArraySummary2(array) {
  let min = array[0],
    max = array[0],
    sum = 0,
    avg = 0;
  for (const data of array) {
    if (min > data) min = data;
    if (max < data) max = data;
    sum += data;
  }
  avg = sum/array.length
  return {min: min, max: max, sum: sum, avg: avg}
}

console.log(findArraySummary(arr));
console.log(findArraySummary2(arr));
