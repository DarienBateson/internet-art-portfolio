
let bench;
let trash;
let rain = 0;

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');

    background(13, 24, 74);


    noStroke();
    noCursor();
}

function draw() {
    
   
    background(13, 24, 74);


    fill(180, 230, 255);
    rect(0, 300, 600, 200);

    fill(88, 57, 39);
    
    bench = 250;
    for (let i = 0; i < 3; i++) {
        
        rect(40, bench, 200, 10);
        bench += 20;
        
    }

    rect(40, 305, 200, 15);
    rect(40, 305, 10, 50);
    rect(230, 305, 10, 50);


    fill(10);
    rect(40, 300, 200, 5);

    rect(280, 250, 55, 90)


    fill(90);

    trash = 280;
    for (let i = 0; i < 6; i++) {
        
        rect(trash, 250, 5, 90);
        trash += 10;
        
    }
     

    fill(125, 249, 255);
    
    if (mouseIsPressed === true) {
        ellipse(mouseX + random(-20, 20), mouseY - rain, 5, 10);
        ellipse(mouseX - random(-20, 20), mouseY + 6 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY - 8 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY + 15 - rain, 5, 10);

        ellipse(mouseX + random(-20, 20), mouseY + 20 - rain, 5, 10);
        ellipse(mouseX -random(-20, 20), mouseY + 26 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY + 38 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY + 15 - rain, 5, 10);

        ellipse(mouseX + random(-20, 20), mouseY + 40 - rain, 5, 10);
        ellipse(mouseX -random(-20, 20), mouseY + 46 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY + 58 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY + 35 - rain, 5, 10);

        ellipse(mouseX + random(-20, 20), mouseY + 60 - rain, 5, 10);
        ellipse(mouseX -random(-20, 20), mouseY + 66 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY + 78 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY + 55 - rain, 5, 10);

        ellipse(mouseX + random(-20, 20), mouseY + 80 - rain, 5, 10);
        ellipse(mouseX -random(-20, 20), mouseY + 86 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY + 98 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY + 75 - rain, 5, 10);

        ellipse(mouseX + random(-20, 20), mouseY + 100 - rain, 5, 10);
        ellipse(mouseX -random(-20, 20), mouseY + 106 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY + 118 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY + 95 - rain, 5, 10);

        ellipse(mouseX + random(-20, 20), mouseY + 120 - rain, 5, 10);
        ellipse(mouseX -random(-20, 20), mouseY + 126 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20), mouseY + 138 - rain, 5, 10);
        ellipse(mouseX + random(-20, 20) , mouseY +115 - rain, 5, 10);

        rain -= 2;

        if (rain < -100) {
            rain = 10;
        }
    }

    fill(245);
    circle(mouseX, mouseY, 50);
    circle(mouseX + 35, mouseY + 10, 50);
    circle(mouseX - 15, mouseY + 10, 50);
    circle(mouseX + 10, mouseY + 10, 50);
    circle(mouseX + 20, mouseY, 50);
}