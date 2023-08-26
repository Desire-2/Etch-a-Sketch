const grid = document.querySelector('.grid');
const gridSizeInput = document.querySelector('#grid-size');
const gridValue = document.querySelector('.grid-size');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);

function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
}

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

grid.addEventListener('mouseover', function (e) {
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

gridSizeInput.addEventListener('input', function (e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener('click', function () {
  reset();
});

resetBtn.addEventListener('click', reset);