let imgx = 220;
let imgy = 280;

function setup() {

  createCanvas(600, 600);

  img = loadImage("q1.png");
  img2 = loadImage("q2.png");

}

function draw() {
  
  background(0);

  frameRate(5);

  var x = random(0, 600);
  var y = random(0, 600);

  for (let i = 0; i < 100; i++) {
    fill(255);
    ellipse(x, y, 5, 5);
    image(img, random(100, 370), random(100, 400), 210, 30);  
  }
  
  
  image(img2, imgx, imgy);
}