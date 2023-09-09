let num = 200 / 3
console.log(num)
console.log(Math.floor(num), 'floor')
console.log(Math.ceil(num), 'ceil')
console.log(Math.round(num), 'round')
console.log('--------------------------')
console.log('math.round')
//Math.round is following Math class
// if more that .5 = ceil. else less then .5 = floor
let num2 = 5.5314
console.log(Math.round(num2), 'round num2 = 5.5314')
num2 = -5.411
console.log(Math.round(num2), 'round num2 = -5.411')

console.log('-------------------------')
console.log('math.pow')
//Math.pow(base, exp)
console.log(Math.pow(5, 2))
console.log(Math.pow(4, 2))

console.log('-------------------------')
console.log(Math.PI, 'pi')
console.log(Math.random(), 'random')

console.log('------------------------')
console.log('random dice')
let random = Math.floor(Math.random() * 6) + 1
console.log(random)

console.log('------------------------')
console.log('random num 10-50')
let random2 = Math.floor(Math.random() * 41) + 10 //0-40 + 10
console.log(random2)

console.log('------------------------')
//Math.floor(random * (max-min+1)) + min
console.log('random num 100-1000')
let random3 = Math.floor(Math.random() * 901) + 100
console.log(random3)

console.log('------------------------')
console.log('random with max min')
let min = 1
let max = 100
let random4 = Math.floor(Math.random() * (max - min + 1)) * min
console.log(random4)

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let rand1 = randomNumber(1, 6)
let rand2 = randomNumber(10, 100)
let rand3 = randomNumber(1, 100)
let rand4 = randomNumber(2, 12)
