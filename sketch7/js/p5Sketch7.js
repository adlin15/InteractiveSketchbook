let steps=0;
let maxSteps =10;

let steps2 = 0;
let secondSpeed = 0.5;

function setup() {
    createCanvas(800,400);
}

function draw() {
    background(120);

let sectionWidth = width / maxSteps;

noStroke();
fill("#2ad42a");
for (let i =0; i <steps; i++) {
    rect(i * sectionWidth, 0, sectionWidth, height / 2);
}

let progressRatio2 = steps2 / maxSteps;
let secondBoxWidth = progressRatio2 * width;

noStroke();
rect(0, height / 2 + 50, secondBoxWidth, 50);

if (steps>= maxSteps && steps2>= maxSteps) {
    textSize(18);
    fill(0);
    text("Completed Progress Bar!", width -500, height -120);
}
else if (steps > 0 || steps2 > 0) {
        textSize(25);
        fill(0);
        text("Complete the progress bar by clicking!.", width - 700, height - 200);
}
}

function mousePressed() {
    if (steps <maxSteps) {
        steps += 1;
    }

    if (steps2 <maxSteps) {
        steps2+= secondSpeed;
    }
}