const divElement = document.getElementById('outputText')
console.log(divElement)
const colorBtnEvent = document.querySelector('input#selectColor')
console.log(colorBtnEvent)
colorBtnEvent.addEventListener('input', (e) => {
    console.log(e.currentTarget.value)
    const color = e.currentTarget.value
    divElement.style.color = color
})