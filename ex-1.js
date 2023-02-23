"use strict";

let loc;
let speed;
let acceleration;
let m = 5 // massa = 5

function setup() {
    createCanvas(windowWidth, windowHeight);
    //x = windowWidth / 2; verandert door loc createVectpr
    //y = windowHeight / 2;

    loc = createVector(windowWidth / 2, windowHeight / 2);
    speed = createVector(1, 2);
    acceleration = createVector();

}

function draw() {
    background(255);
    fill(0);


    if ((loc.x > windowWidth) || (loc.x < 0)) {
        speed.x *= -1;
    }
    if ((loc.y > windowHeight) || (loc.y < 0)) {
        speed.x *= -1;
    }


    // add gravity 
    let gravity = createVector(0, 3);
    applyForce(gravity);


    if (mouseIsPressed) {
        let wind = createVector(-1, 0);
        applyForce(wind);
    }

    speed.add(acceleration)
    loc.add(speed)


    ellipse(loc.x, loc.y, m * 10);

}

function addForce(force) {

    let f = force.copy()
    f.div(m) //force divided by massa
    acceleration.add(f);

}