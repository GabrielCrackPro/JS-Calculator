const API_URL = 'http://localhost:3000'

const calculator = document.querySelector('#calculator')
const screen = document.querySelector('.screen')

const clearBtn = document.querySelector('#button-clear')
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const divideBtn = document.querySelector('#divide-btn')
for (var i = 0; i <= 9; i++) {
    const button = document.querySelector('#button-' + [i])
    button.addEventListener('click', () => {
        if (button.textContent == 1) {
            screen.textContent += button.textContent
        } else if (button.textContent == 2) {
            screen.textContent += 2
        } else if (button.textContent == 3) {
            screen.textContent += 3
        } else if (button.textContent == 4) {
            screen.textContent += 4
        } else if (button.textContent == 5) {
            screen.textContent += 5
        } else if (button.textContent == 6) {
            screen.textContent += 6
        } else if (button.textContent == 7) {
            screen.textContent += 7
        } else if (button.textContent == 8) {
            screen.textContent += 8
        } else if (button.textContent == 9) {
            screen.textContent += 9
        } else {
            screen.textContent += 0
        }
    })
}
calculator.addEventListener('submit', (e) => {
    const screenData = []
    screenData.push(screen.textContent)
    console.log(screenData)
})
clearBtn.addEventListener('click', () => {
    screen.textContent = ''
})
