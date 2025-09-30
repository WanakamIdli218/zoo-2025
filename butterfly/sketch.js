//This is my little sketch to make a fun butterfly.

let myButterfly;

function setup() {
 
  createCanvas(windowWidth, windowHeight);
  
  // givin the butterfly a nameee
  myButterfly = new Butterfly("Flappy", width / 2, height / 2);
}

function draw() {
  // darker bg
  background(26, 26, 26);

  // making the butterfly moveeee
  myButterfly.move();
  myButterfly.flap();
  myButterfly.show();
}



class Butterfly {
  // We set up our butterfly with a name and starting position
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    
    // setting a few things to control its look and how it moves
    
    this.wingSpeed = 0.1;
    this.wingAngle = 0;
    
    // blueeeeeeeeeeee butterflyy
    this.bodyColor = color(0);
    this.wingColor = color('rgb(0,152,255)');
  }

  // This is the function that draws the butterfly on the screen
  show() {
    
    
    // using push() and pop() so our changes don't mess up anything else we draw
    
    push();
    translate(this.x, this.y);
    scale(2.5);

    // Making the wings flap
    let flapAngle = sin(this.wingAngle) * PI / 8;

    // Drawing the body
    noStroke();
    fill(this.bodyColor);
    rect(-3, -20, 6, 40, 3);
    ellipse(0, -25, 20, 20);

    // Drawing the googly eyes
    fill(255);
    ellipse(-5, -25, 10, 10);
    ellipse(5, -25, 10, 10);

    fill(0);
    ellipse(-3.5, -25.5, 5, 5);
    ellipse(6.5, -25.5, 5, 5);

    // Drawing the antennae
    stroke(this.bodyColor);
    strokeWeight(1.5);
    line(-5, -35, -10, -50);
    line(5, -35, 10, -50);
    noStroke();
    fill(this.bodyColor);
    ellipse(-10, -50, 5);
    ellipse(10, -50, 5);
    
    // Now for the actual wings! We'll use a curved shape.
    fill(this.wingColor);
    stroke(this.bodyColor);
    strokeWeight(1);
    
    // Left wings
    push();
    rotate(flapAngle);
    
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-50, -40);
    curveVertex(-80, -10);
    curveVertex(-50, 30);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-30, 40);
    curveVertex(-60, 50);
    curveVertex(0, 20);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();
    
    pop();

    // Right wings
    push();
    rotate(-flapAngle);
    
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(50, -40);
    curveVertex(80, -10);
    curveVertex(50, 30);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();
    
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(30, 40);
    curveVertex(60, 50);
    curveVertex(0, 20);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();
    
    pop();
    
    pop();
  }

  // making the wings move up and down
  flap() {
    this.wingAngle += this.wingSpeed;
  }

  // This is how our butterfly wanders around
  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}