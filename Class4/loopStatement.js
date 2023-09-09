let nums = [10, 20, 30]
//for of (use with array or iterable object)
for (const num of nums) {
  console.log(num)
}

for (let index = 0; index < nums.length; index++) {
  console.log(nums[index])
}

//for in (use with object data type)
let obj = { id: 1, title: 'JS' }
for (const key in obj) {
  console.log(`${key}:${obj[key]}`)
}