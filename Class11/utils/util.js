function echo (msg) {
  return msg
}

function sum (...num) {
  return num.reduce((prev, value, index) => prev + value, 0)
}

// export const MAX_VALUE = 10

module.exports = { echo, sum }
