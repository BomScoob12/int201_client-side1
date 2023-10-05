const fruits = ['apple', 'mango', 'orange', 'pineapple']
const arg = ['a', 'e', 'i', 'o', 'u']
console.log(
  fruits.some((fruits) => arg.includes(fruits.charAt(0).toLowerCase()))
)

// reduce (callback(firstelement, arr), default firstelement)
console.log(
  fruits.reduce(
    (firstCharacter, fruits) => firstCharacter.concat(fruits.charAt(0)),
    ''
  )
)


//total sell product
const sellProduct = [
  { id: 1, price: 100, sell: 5 },
  { id: 2, price: 50, sell: 2 },
  { id: 3, price: 25, sell: 10 },
]

// return totalSelling
const totalSell = sellProduct.reduce(
  (total, element) => total + element.price * element.sell,
  0
)
console.log(totalSell)
