function setup() {
    createCanvas(600,400);
    background(0);
    strokeWeight(10);
    colorMode (HSB);
}

function mouseDragged() {
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);


}