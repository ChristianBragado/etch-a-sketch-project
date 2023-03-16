const container = document.querySelector('#container');
const button = document.getElementById('new-grid-button')

button.addEventListener('click', function() {
    let squaresPerSide = parseInt(prompt("Enter the number of squares per side (maximum 32):"));
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 32) {
        alert("Invalid input. Please enter a number between 1 and 32.");
        return;
    }
    generateGrid(squaresPerSide);
});

function generateGrid(squaresPerSide) {
    // Clear the existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

     // Set the dimensions of the container based on the number of squares per side
     let containerSize = squaresPerSide * 30;
     container.style.width = containerSize + "px";
     container.style.height = containerSize + "px";
 
     // Generate the new grid
     for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
         const div = document.createElement('div');
         div.classList.add('grid-square');
         container.appendChild(div);
 
         div.addEventListener('mouseover', function() {
             div.classList.add('colored');
         });
     }
 }

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-square');
    container.appendChild(div);
    
}

const divs = document.querySelectorAll('.grid-square')

divs.forEach(div => div.addEventListener('mouseover', function(e) {
    this.classList.add('colored')
}))

