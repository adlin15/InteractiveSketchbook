let circles = [];
let score = 0;
let boxX = 50;
let boxY = 50;
let boxW = 500;
let boxH = 300;

function setup() {
  createCanvas(600, 400);
  spawnCircles(3);
}

function draw() {
  background(0);


  stroke(255);
  strokeWeight(3);
  noFill();
  rect(boxX, boxY, boxW, boxH);

  noStroke();
  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];

    c.x += c.vx;
    c.y += c.vy;

    if (c.x - c.r < boxX || c.x + c.r > boxX + boxW) {
      c.vx *= -1;
    }
    if (c.y - c.r < boxY || c.y + c.r > boxY + boxH) {
      c.vy *= -1;
    }

    fill(c.col);
    ellipse(c.x, c.y, c.r * 2, c.r * 2);
  }

  fill(255);
  noStroke();
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
}

function spawnCircles(s) {
  for (let i = 0; i < s; i++) {
    let r = random(15, 30);
    let x = random(boxX + r, boxX + boxW - r);
    let y = random(boxY + r, boxY + boxH - r);
    let vx = random(-3, 3);
    let vy = random(-3, 3);
    let col = color(random(100, 255), random(100, 255), random(100, 255));
    circles.push({ x, y, r, vx, vy, col });
  }
}

function mousePressed() {
  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    let d = dist(mouseX, mouseY, c.x, c.y);
    if (d < c.r) {
      circles.splice(i, 1);
      score++;

      spawnCircles(1);
      break;
    }
  }
}