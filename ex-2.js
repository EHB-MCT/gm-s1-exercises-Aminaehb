"use strict";

//Draw a line which follow your mouse pointer from the center of the screen
//Check https://p5js.org/reference/ on how to access mouse data

let w, h;
//let loc;

function setup() {
    w = windowWidth;
    h = windowHeight;

    // loc = createVector(windowWidth / 2, windowHeight / 2); mag maar locatie wordt niet bijgehouden
    createCanvas(w, h);
    //createCanvas(windowWidth, windowHeight);
    background(200);
}

function draw() {
    let center = createVector(w / 2, h / 2);
    let mouse = createVector(mouseX, mouseY);

    background(200);
    


    //line(mouseX, 0, mouseX, 100);
    //line (0, 0, center.x, center.y)
    line (0, 0, mouse.x, mouse.y)


    mouse.sub(center);
    
    translate(w/2, h/2);
    line (0, 0, mouse.x, mouse.y)



    //describe('horizontal black line moves left and right with mouse x-position');
}
