function defaultParamFn(n1 = 10, n2 = 'default', n3 = true) {
  console.log(n1, n2, n3)
}
defaultParamFn(1, 2, 3)
defaultParamFn(1, 2)
defaultParamFn(1, undefined,'Souuuuuuuuu!!!!!!')
defaultParamFn(1, null, null)