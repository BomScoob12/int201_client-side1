const MAX_VALUE = 10

function sum (...num) {
  return num.reduce((prev, value, index) => prev + value, 0)
}

function echo (msg) {
  return msg
}

// ES module (named export)
// export list
// export { echo, sum }

// default export
// export as default
export { sum as default, echo, MAX_VALUE }
