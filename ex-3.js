"use strict";

let w, h;
let loc, speed, acceleration;

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    background(200);

    loc = createVector(w / 2, h / 2);
    speed = createVector();
    acceleration = createVector();
}

function draw() {
    background(200);

    //mouse vector
    let mouse = createVector(mouseX, mouseY);
    mouse.sub(loc);

    // mouse.normalize();
    // mouse.multi(0, 1);
    // mouse.setMag(0, 1)

    acceleration.add(mouse);
    acceleration = createVector();
    acceleration.limit(1); //max value op vector = mag niet groter zijn dan dit getal


    //Formula for movement
    speed.add(acceleration);
    speed.limit(2);
    loc.add(speed)

    ellipse(loc.x, loc.y, 50);
}