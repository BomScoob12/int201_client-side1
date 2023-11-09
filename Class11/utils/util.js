function echo (msg) {
  return msg
}

function sum (...num) {
  return num.reduce((prev, value, index) => prev + value, 0)
}

module.exports = { echo, sum }
