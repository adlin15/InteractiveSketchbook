function setup() {
    createCanvas(600,400);
}

function draw() {
    background(100)

    let x = constrain(mouseX, 100, 300);
    triangle(x, 300, 60, 60);
}