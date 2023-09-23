const grid = document.querySelector('.grid');
const button = document.querySelector('.set-grid');
let gridSize = 8

makeGrid(gridSize)

function makeGrid(size){
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            grid.appendChild(createBlock(grid.clientWidth / size));
        }
    }
}

function createBlock(size){
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.height = `${size}px`;
    block.style.width = `${size}px`;

    return block;
}

grid.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('block')) {
            event.target.classList.add('active');
        }});

button.addEventListener('click', function() {

    gridSize = prompt('Select a grid size!\nExample: 4 for 4x4');
    
    reset();
})

function reset() {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    makeGrid(gridSize);
  }
  