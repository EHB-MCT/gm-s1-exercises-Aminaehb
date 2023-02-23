"use strict";

let loc;
let speed;


function setup() {
    createCanvas(windowWidth, windowHeight);
    //x = windowWidth / 2; verandert door loc createVectpr
    //y = windowHeight / 2;

    loc = createVector(windowWidth / 2, windowHeight / 2);
    //speed = createVector(1, 1); 
    speed = p5.Vector.random2D(); //andere richting maar dezelfde snelheid 
    //Random2D= creeert unit vector = grote blijft 1 = dezelfde snelheid 1
    // multiple om het sneller te doen
    speed.mult(2); //beweegt snel maar constant = ablletje beweegt 2keer zo snel
}

function draw() {
    background(255);
    fill(0);

    //edge detection
    if ((loc.x > windowWidth) || (loc.x < 0)) {
        speed.x *= -1; // xSpeed *= -1;
    }
    if ((loc.y > windowHeight) || (loc.y < 0)) {
        speed.x *= -1; //ySpeed *= -1
    }

    loc.add(speed)

    //loc.x += speed;
    //loc.y += speed;

    ellipse(loc.x, loc.y, 50);

}