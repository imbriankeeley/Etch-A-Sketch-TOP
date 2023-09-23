const grid = document.querySelector('.grid');
makeGrid(8)

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