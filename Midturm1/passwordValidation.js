// 65130500083 Sarawit Kraukham
function isPasswordValid(password) {
  if (password === null || password === undefined) return false
  if (password.length >= 8 && isUpperCase(password) && isLowerCase(password)
    && hasNumber(password) && isSpacialCase(password)) {
    return true
  } else {
    return false
  }
}

function isUpperCase(password){
  const isUpper = /[A-Z]/
  const index = password.search(isUpper)
  return index >= 0 ? true : false
}

function isLowerCase(password){
  const isLower = /[a-z]/
  const index = password.search(isLower)
  return index >= 0 ? true : false
}

function isSpacialCase(password){
  const regSpacials = /[!@$#%^&*.'"]/g
  const index = password.search(regSpacials)
  return index >= 0 ? true : false
}
function hasNumber(password){
  const regNum = /[\d]/
  const index = password.search(regNum)
  return index >= 0 ? true : false
}
module.exports = isPasswordValid
// console.log(isUpperCase("javaeeee"))
// console.log(isLowerCase("gggggdsff"))
// console.log(isSpacialCase("adsdwdqddd"))
// console.log('----------------------')
// console.log(hasNumber("sfasdfa"))
// console.log(hasNumber("sfasdfa1"))
// console.log(isPasswordValid("blaaBlaaaa"))
// console.log(isPasswordValid("blaaBl$aaaa"))



