const wrapper = document.querySelector('.wrapper')

function randomRbg() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid() {   
    const numOfColumns = parseInt(window.prompt('How many columns/rows would you like?'))
    if (numOfColumns > 100) {
        alert('Wow! Thats too many, lets try less than 100');
        return createGrid();
    }

    colPercent = 100 / numOfColumns + "%"
    columns = ""
    for (let i = 0; i < numOfColumns; i++) {
            columns += colPercent;
        }
    console.log(columns)

    wrapper.style.gridTemplateColumns = columns

    const totalSquares = numOfColumns ** 2

    for (let i = 0; i < totalSquares; i++) {
        let color = randomRbg()
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('gridSquare')
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = color
        })
        wrapper.appendChild(gridSquare)
    }
    
    return
}

createGrid()

const resetButton = document.querySelector('.resetButton')
resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll('.gridSquare')
    squares.forEach(square => wrapper.removeChild(square))
    createGrid()
})