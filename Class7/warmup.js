const arr = [1, 3, 6, 2, 10, 9];

function findArraySummary(array) {
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
    } else if (outputObj.max < i) {
      outputObj.max = i;
    }
    outputObj.sum += i;
    count++;
  }

  outputObj.avg = outputObj.sum / count;

  return outputObj;
}

console.log(findArraySummary(arr));
