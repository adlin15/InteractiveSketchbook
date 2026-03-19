let circles = [];
let squares = [];
let score = 0;
let boxX = 50;
let boxY = 50;
let boxW = 700;
let boxH = 500;
let isPaused = false;
let gameOver = false;
let startButton, pauseButton, restartButton;
let lastSquareTime = 0;

function setup() {
  createCanvas(800, 600);
  spawnCircles(3);

  startButton = createButton('Start');
  startButton.position(300, 30);
  startButton.mousePressed(startGame);

  pauseButton = createButton('Pause');
  pauseButton.position(360, 30);
  pauseButton.mousePressed(pauseGame);

  restartButton = createButton('Restart');
  restartButton.position(430, 30);
  restartButton.mousePressed(restartGame);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(boxX, boxY, boxW, boxH);

  if (!isPaused && !gameOver) {
    updateCircles();
    updateSquares();
    if (millis() - lastSquareTime > 5000) {
      spawnSquare();
      lastSquareTime = millis();
    }
  }

  drawCircles();
  drawSquares();

  fill(255);
  noStroke();
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);

  if (gameOver) {
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Game Over!", width / 2, height / 2);
  }
}

function updateCircles() {
  for (let c of circles) {
    c.x += c.vx;
    c.y += c.vy;
    if (c.x - c.r < boxX || c.x + c.r > boxX + boxW) c.vx *= -1;
    if (c.y - c.r < boxY || c.y + c.r > boxY + boxH) c.vy *= -1;
  }
}

function drawCircles() {
  noStroke();
  for (let c of circles) {
    fill(c.col);
    ellipse(c.x, c.y, c.r * 2, c.r * 2);
  }
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

function spawnSquare() {
  let size = random(20, 40);
  let x = random(boxX + size, boxX + boxW - size);
  let y = random(boxY + size, boxY + boxH - size);
  squares.push({ x, y, size });
}

function updateSquares() {
//Eventually could add fading out, but didn't have time to implement it.
}

function drawSquares() {
  noStroke();
  fill(255, 0, 0);
  for (let s of squares) {
    rect(s.x - s.size / 2, s.y - s.size / 2, s.size, s.size);
  }
}

function mousePressed() {
  if (isPaused || gameOver) return;

  for (let i = circles.length - 1; i >= 0; i--) {
    let c = circles[i];
    let d = dist(mouseX, mouseY, c.x, c.y);
    if (d < c.r) {
      circles.splice(i, 1);
      score++;
      spawnCircles(1);
      return;
    }
  }

  for (let s of squares) {
    if (
      mouseX > s.x - s.size / 2 &&
      mouseX < s.x + s.size / 2 &&
      mouseY > s.y - s.size / 2 &&
      mouseY < s.y + s.size / 2
    ) {
      gameOver = true;
      isPaused = true;
      return;
    }
  }
}

function startGame() {
  if (!gameOver) isPaused = false;
}

function pauseGame() {
  if (!gameOver) isPaused = true;
}

function restartGame() {
  score = 0;
  circles = [];
  squares = [];
  isPaused = false;
  gameOver = false;
  lastSquareTime = millis();
  spawnCircles(3);
}