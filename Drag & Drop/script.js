
// This project is inspired by a tutorial from the YouTube channel "GreatStack".
// While following the tutorial, I encountered an issue with the original code, 
//resulting in the error: "Uncaught TypeError: Node.appendChild: Argument 1 is not an object.
//" I made modifications to the code structure to resolve this error and successfully implemented the functionality.

const lists = document.querySelectorAll(".draggable-item");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

let selected;

// Event listener for dragover to prevent default behavior
rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
});

leftBox.addEventListener("dragover", (e) => {
    e.preventDefault();
});

// Event listener for drop on rightBox
rightBox.addEventListener("drop", (e) => {
    rightBox.appendChild(selected);
    selected = null;
});

// Event listener for drop on leftBox
leftBox.addEventListener("drop", (e) => {
    leftBox.appendChild(selected);
    selected = null;
});

// Loop to add dragstart event listener to each draggable item
for (let list of lists) {
    list.addEventListener("dragstart", (e) => {
        selected = e.target;
    });
}

