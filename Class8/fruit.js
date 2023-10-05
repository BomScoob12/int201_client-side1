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


//splice with remove
//return an array containing the deleted elements.
const removeElements = fruits.splice(1, 2)
console.log(removeElements) //[ 'mango', 'orange' ]
console.log(fruits) //[ 'apple', 'pineapple', 'banana', 'grape' ]
//splice with add
const deletedElements = fruits.splice(2, 0, 'mango', 'rambutant')
console.log(deletedElements) //[]
console.log(fruits) //[ 'apple', 'pineapple', 'mango', 'rambutant', 'banana', 'grape' ]
//splice with replace
const deletedFruit = fruits.splice(2, 1, 'mangosteen')
console.log(deletedFruit) //[ 'mango' ]
console.log(fruits)
