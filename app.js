
// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');
//event: picking color:
let chosenColor = 'purple';  // sets a default color


document.getElementById("colorB").addEventListener("click", () => {
    chosenColor = "blue";
}); //if chose blue
document.getElementById("colorP").addEventListener("click", () => {
    chosenColor = "purple";
}); //if chose purple
document.getElementById("colorR").addEventListener("click", () => {
chosenColor = "red";
}); //if chose red 
//picking shape 

let selectedShape = "circle" //default shape
document.getElementById("circle").addEventListener("click", () => {
    selectedShape = "circle";}); //selects circle as shape
document.getElementById("rectangle").addEventListener("click", 
    () => {
    selectedShape = "rectangle"; //selects rectangle as shape
});
document.getElementById("line").addEventListener("click", () => {
    selectedShape = "line"; //selects line as shape
});

// now paths to create the shapes 
// draw a circle
function createCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false); 
    ctx.fillStyle = chosenColor; //fills color of circle
    ctx.fill();
}

// draw a rectangle
function createRectangle(x, y) {
const width = x - defX;
const height = y - defY;
    ctx.fillStyle = chosenColor;
    ctx.fillRect(defX, defY, width, height);} //creates the rectangle
    

// draw a line
function createLine(x, y) {
    ctx.beginPath();
ctx.moveTo(defX, defY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = chosenColor;
    ctx.lineWidth = 4;
    ctx.stroke(); //creates the line
};

//starting point
let defX, defY //default start point
canvas.addEventListener("mousedown", e => {
    defX = e.offsetX;  // Sets X to the mouse's place
    defY = e.offsetY;  // Set Y to the mouse's place
    console.log(`x = ${defX} y= ${defY}`)
}); //adds event listener to track the mouse movements


// create selected shape
canvas.addEventListener("mouseup", e => {
    if (selectedShape === "circle") {
        createCircle(e.offsetX, e.offsetY);
    } else if (selectedShape === "rectangle") {
        createRectangle(e.offsetX, e.offsetY);
    } else if (selectedShape === "line") {
        createLine(e.offsetX, e.offsetY); 
    }
}); //creates the shape that was selected 

//clear 
document.querySelector("#clear").addEventListener("click", () => {
    ctx.clearRect(0,0,canvas.width,canvas.height); 
}) //clears page 

