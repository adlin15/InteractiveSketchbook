let value = 0;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(100);

  fill(value);
  square(100, 100, 300);
}

function doubleClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}