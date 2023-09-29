function createGrid(gridSize)
{
    let squareSize = (1/gridSize)*100;
    for(let i=0; i<gridSize; i++)
    {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'grid-row');
        gridRow.style.height = `${squareSize}%`
        gridContainer.appendChild(gridRow);
        for(let j=0; j<gridSize; j++)
        {
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('class', 'grid-square');
            gridSquare.style.width = `${squareSize}%`
            gridSquare.addEventListener('mouseenter', e => {gridSquare.setAttribute('class', 'grid-square selected')})
            gridRow.appendChild(gridSquare);
        }
    }
}

function clearBoard()
{
    let squares = document.getElementsByClassName('selected');
    while (squares.length) {
        squares[0].setAttribute('class', 'grid-square');
    }
}

function createOptions()
{
    const clearButton = document.createElement('button');
    clearButton.setAttribute('class', 'button');
    clearButton.innerHTML = 'Clear';
    clearButton.addEventListener('click', e => {clearBoard()});
    optionsContainer.appendChild(clearButton);

    const resizeButton = document.createElement('button');
    resizeButton.setAttribute('class', 'button');
    resizeButton.innerHTML = 'Resize';
    resizeButton.addEventListener('click', e => {resizeBoard()});
    optionsContainer.appendChild(resizeButton);

    const extraButton = document.createElement('button');
    extraButton.setAttribute('class', 'button');
    extraButton.innerHTML = 'Extra';
    optionsContainer.appendChild(extraButton);

    const extraButton2 = document.createElement('button');
    extraButton2.setAttribute('class', 'button');
    extraButton2.innerHTML = 'Extra';
    optionsContainer.appendChild(extraButton2);
}

function resizeBoard()
{
    gridSize = prompt('Please enter a board size up to 100');
    if (gridSize > 100)
    {
        gridSize = 100;
    }
    if(gridSize !== null)
    {
        deleteGrid();
        createGrid(Number(gridSize));
    }
}

function deleteGrid()
{
    clearBoard();
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const optionsContainer = document.createElement('div');
optionsContainer.setAttribute('class', 'options-container');
document.body.appendChild(optionsContainer);

createOptions();

let gridSize = 100;

const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'grid-container');
document.body.appendChild(gridContainer);

createGrid(gridSize);