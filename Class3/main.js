const $a = 10
// constant var it can not change address or reassign
const _ltt = 20
let x = 1

// weakly type and dynamic type
console.log($a, typeof $a)

console.log(_ltt, typeof _ltt)

console.log(x, typeof x)
x = true
console.log(x, typeof x)

x = 'Haha this is x'
console.log(x, typeof x)
console.log(typeof undefined)
console.log(typeof null)

let nums = [1, 2, 3, 4, 5, 6]
console.log(nums, typeof nums)

const obj = {
  id: 10,
  title: 'js',
}
console.log(obj, typeof obj)

// obj = nums (error, is not allow)
nums = obj
nums.id = 555

console.log(nums)
console.log(obj)

// ids is an array type
const ids = [101, 105, 110, 120]
ids[0] = 1
console.log(ids)
ids[ids.length - 1] = 444
console.log(ids)

let m,
  n,
  o = 1,
  p = true,
  q = null
console.log(m)
console.log(n)
console.log(o)
console.log(p)
console.log(q)

if (m === undefined) console.log('m is undefined')
if (q === null) console.log('q is null')
if('2' == 2) console.log(`'2' == 2`)
// == check only value
// === check type first and check value
if('2' === 2) console.log(`'2' === 2`)
else console.log(`'2' !== 2 (in case '2' === 2)`)

if (typeof m === 'undefined') console.log(`typeof m === undefined`)
if (typeof q === 'object') console.log(`typeof q === object`)
