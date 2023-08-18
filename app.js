const board = document.querySelector('#board')

const colors = ['#fe019a', '#fe59c2', '#04d9ff,', '#5555ff', '#bc13fe', '#f80000','#ff073a', '#ffa420', '#ffa343', '#ffea19', '#fefe22', '#c8ff00', '#ccff00', '#7df9ff', '#39ff14']

const SQUARES_NUMBER = 960

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseleave', ()=> removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 1px ${color}, 0 0 2px ${color}, 0 0 5px ${color}, 0 0 7px ${color}, 0 0 10px ${color}, 0 0 12px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}