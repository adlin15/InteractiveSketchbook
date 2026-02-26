let steps=0;
let maxSteps =10;



function setup() {
    createCanvas(800,400);
}

function draw() {
    background(120);

let sectionWidth = width / maxSteps;
let fillColor = (steps >= maxSteps) ? color("#ff0000") : color("#34bbfa");

noStroke();
fill("#34bbfa")
for (let i =0; i <steps; i++) {
    rect(i * sectionWidth, 0, sectionWidth, height);
}


if (steps>= maxSteps) {
    textSize(18);
    fill(0);
    text("Completed Progress Bar!", width -500, height -120);
}
else if (steps > 0) {
        textSize(25);
        fill(0);
        text("Complete the progress bar.", width - 700, height - 200);
}
}

function mousePressed() {
    if (steps <maxSteps) {
        steps += 1;
    }
}