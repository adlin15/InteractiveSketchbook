let imgs = [];
let totalImages = 5;
let currentIndex = 0;

function preload() {
  img[0] = loadimage("img/image1.jpg");
  img[1] = loadimage("img/image2.jpg");
  img[2] = loadimage("img/image3.jpg");
  img[3] = loadimage("img/image4.jpg");
  img[4] = loadimage("img/image5.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(0);


  let img = imgs[currentIndex];
  let aspect = img.width / img.height;
  let displayW = width;
  let displayH = width / aspect;


  if (displayH > height) {
    displayH = height;
    displayW = height * aspect;
  }


  image(img, width / 2, height / 2, displayW, displayH);


  fill(0, 150);
  rect(0, height - 60, width, 60);
  fill(255);
  text(`Image ${currentIndex + 1} of ${totalImages}`, width / 2, height - 30);
  text("Previous. | Next.", width / 2, 30);
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentIndex = (currentIndex + 1) % totalImages;  
  } else if (keyCode === LEFT_ARROW) {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}