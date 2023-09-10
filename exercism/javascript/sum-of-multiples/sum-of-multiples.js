//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (arrayItem, level) => {
  // multiple of array item less than level and combine
  const multiples = new Set()

  for (let i = 0; i < arrayItem.length; i++) {
    if (arrayItem[i] === 0) continue
    //access how many Items in array
    for (let j = arrayItem[i]; j < level; j += arrayItem[i]) {
      //multiply of thier self
      multiples.add(j)
    }
  }
  let sums = 0
  multiples.forEach((value) => (sums += value))
  return sums
}
