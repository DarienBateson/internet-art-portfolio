let planetSize;
let landCenter;
let landRadius;
let landMassAmount;
let landMassX;
let landMassY;
let otherLandX;
let otherLandY;
let otherLandSize;
let moonAmount;
let moonSize;
let moonLocation;
let starAmount;

let moonR = 400;

let centerX = 0;
let centerY = 0;
let d;


let colorType = ['green', 'red', 'purple', 'brown', 'pink'];
let color;
let color1 = 0;
let color2 = 0;
let color3 = 0;
let colorChanged1 = 0;
let colorChanged2 = 0;
let colorChanged3 = 0;

let dots = [];
let maxR = 100;


function setup() {
    const myCanvas = createCanvas(1280, 920);
    myCanvas.parent('myCanvas');

    background(5);

    noStroke();
    //noCursor();
    noLoop();
}

function draw() {

    background(5);
    stars();
    translate(width / 2, height / 2);
    
    planetSize = random(300, 740);
    planetControl(planetSize);
    landMass(planetSize);

    moonControl();
}

//creates stars in the background
function stars() {
    starAmount = random(100, 250);
    for (let s = 0; s < starAmount; s++) {
        push();
        fill(255,255,255);
        circle(random(0, 1280), random(0, 920), random(2, 5));
        pop();
    }
}

//creates planet and controls water color
function planetControl(planetSize) {
    push();
    fill(random(0, 40), 0, random(120, 200)); //color
    circle(0, 0, planetSize); //size
    pop();
}

//Controls how many moons there are and logs the amount
function moonControl() {
    moonAmount = round(random(1, 5));
    for (let i = 0; i < moonAmount; i++) {
        moonCreation();
    }
}

//Creates each individual moon (size, color, location, and texture)
function moonCreation() {
    moonSize = random(20, 50);
    moonColor = random(115, 225);
    moonLocation = random(0, 360);
    //moonTexture();
    push();
    fill(moonColor);
    circle(cos(moonLocation)*moonR, sin(moonLocation)*moonR, moonSize);
    pop();
}

//redraws planet on click
function mousePressed() {
    redraw();
  }
//creates a landmass on the planet
function landMass(planetSize) {
    landMassAmount = round(random(5, 10));
    color = random(colorType);

    for (let l = 0; l < landMassAmount; l++) {
        color1 = 0;
        color2 = 0;
        color3 = 0;
        if (planetSize < 1000) {
            landCenter = random(0, 2*PI);
            landRadius = random(0, planetSize/2 - planetSize/10);
            landMassX = landRadius * cos(landCenter);
            landMassY = landRadius * sin(landCenter);

            //handles main color
            if (color === 'red') {
                color1 = 153;
            }
            if (color === 'green') {
                color2 = 153;
            }
            if (color === 'brown') {
                color1 = 153;
                color2 = 76;
                color3 = 40;
            }
            if (color === 'purple') {
                color1 = 76;
                color2 = 40;
                color3 = 153;
            }
            if (color === 'pink') {
                color1 = 153;
                color2 = 40;
                color3 = 76;
            }

            //center of landmass
            push();
            fill(color1, color2, color3);
            circle(landMassX, landMassY, planetSize/5);
            pop();


            //the rest of this landmass
            for (i = 0; i < 100; i++) {
                otherLandSize = random(planetSize/24, planetSize/16);
                otherLandX = random(-planetSize/8,planetSize/8);
                otherLandY = random(-planetSize/8,planetSize/8);

                //color of each bit of landmass
                colorChanged1 = 0;
                colorChanged2 = 0;
                colorChanged3 = 0;

                if (color === 'red') {
                    colorChanged1 = color1 + random(-7, 7);
                }
                if (color === 'green') {
                    colorChanged2 = color2 + random(-7, 7);
                }
                if (color === 'brown') {
                    colorChanged1 = color1 + random(-7, 7);
                    colorChanged2 = color2 + random(-7, 7);
                }
                if (color === 'purple') {
                    colorChanged1 = color1 + random(-7, 7);
                    colorChanged3 = color3 + random(-7, 7);
                }
                if (color === 'pink') {
                    colorChanged1 = color1 + random(-7, 7);
                    colorChanged3 = color3 + random(-7, 7);
                }

                d = dist(centerX, centerY, otherLandX + landMassX, otherLandY + landMassY);

                if (d < planetSize/2 - otherLandSize/2) {
                    push();
                    fill(colorChanged1, colorChanged2, colorChanged3);
                    circle(landMassX + otherLandX, landMassY + otherLandY, otherLandSize);
                    pop();
                }
            }
        }
        
    }
}


/*
Moons
    pick point on "PI" (sin(x) cos(y)) (one or the other) (https://editor.p5js.org/p5/sketches/Math:_Randomchords) translate to center

Planet Surface
    Perlin Noise
    Polar Perlin Noise Loops
    (Look at code train videos)
    https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn pangea?
    ******* https://www.youtube.com/watch?v=Lv9gyZZJPE0 i think this is the one *******

How to make land without it "going off planet" (maybe make the maximum noise value another sin or cos) (https://editor.p5js.org/zapra/sketches/rjIJR18fT) (https://kirkdev.blogspot.com/2021/10/creating-and-positioning-circle-image.html) (use createGraphic then delete the inverse of the circle OR see if the graphic itself can be a circle)
OR
How to make a semi circle around the planet



Functions Needed
    planetCreation (size, planetLand, planetWater)
    planetLand (landTexture, landColor)
    planetWater (waterTexture, waterColor)

    moonControl (moonAmount, moonCreation)
    moonCreation (moonSize, moonTexture, moonColor, moonLocation)

*/