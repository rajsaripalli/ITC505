// Define the size of the board
const boardSize = 5;
const board = document.getElementById('game-board');

// Create the board with squares
function createBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.index = i;
        square.addEventListener('click', () => handleClick(i));
        board.appendChild(square);
    }
}

// Toggle the square between 'on' (white) and 'off' (black)
function toggle(index) {
    const square = board.children[index];
    if (square) square.classList.toggle('is-off');
}

// Handle click on a square and toggle the neighbors
function handleClick(index) {
    const x = index % boardSize;
    const y = Math.floor(index / boardSize);

    // Toggle the clicked square and its neighbors
    toggle(index); // Self
    if (x > 0) toggle(index - 1); // Left
    if (x < boardSize - 1) toggle(index + 1); // Right
    if (y > 0) toggle(index - boardSize); // Up
    if (y < boardSize - 1) toggle(index + boardSize); // Down

    // Check if the game is won
    if (checkWin()) {
        // Delay the alert to ensure the layout is updated first
        setTimeout(function() {
            alert("You win!");
        }, 100);
    }
}

// Check if the game is won (all squares are off/black)
function checkWin() {
    return [...board.children].every(square => square.classList.contains('is-off'));
}

// Randomly toggle squares to create a solvable initial state
function randomizeBoard(moves = 10) {
    for (let i = 0; i < moves; i++) {
        const index = Math.floor(Math.random() * boardSize * boardSize);
        handleClick(index); // Simulate a legal click to ensure solvability
    }
}

// Create the board and randomize it
createBoard();
randomizeBoard();
