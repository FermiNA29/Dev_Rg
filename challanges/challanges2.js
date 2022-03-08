//Challenge: Bouncy Ball
//CAMP ID = BE2000848
//Name = Fermi Naufal Akbar

// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

draw = function() {
    background(127, 204, 255);
    
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);
    
    if(y > 375) {
        speed = -5;
    }
    if(y < 25) {
        speed = 5;
    }

    // move the ball
    y = y + speed;
};

//Challenge: Your First painting App
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

draw = function() {
    if(mouseIsPressed){
        noStroke();
        fill(255, 0, 0);
        ellipse(mouseX, mouseY, 20, 20);
    }
    
};


//Challenge: Number Analyzer
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

var theNumber = -0.35;

fill(0, 0, 0);
textSize(30);
text("Analysis of: " + theNumber, 10, 36);
noFill();
if(theNumber > 0) {
    rect(5, 60, 200, 40); 
}
if(theNumber < 0) {
    rect(5, 111, 200, 40);
}
if(theNumber === 0) {
    rect(5, 159, 200, 40);
}

text("It's positive", 10, 90);
text("It's negative", 10, 140);
text("It's zero", 10, 190);

//Challenge: Your First Button
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

draw = function() {
    fill(0, 255, 68); // start color
    if(mouseIsPressed && mouseY < 200) {
        fill(255, 0, 0);
    
    }
    rect(0, 0, 400, 200);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("Press me!", 145, 115);
};

//Challenge Smarter Button
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

draw = function() {
    fill(0, 255, 68); // start color

    if (mouseIsPressed && mouseX > 50 && mouseX < 300 && mouseY > 150 && mouseY < 250) { 
        fill(33, 112, 52); // click color
    }
    rect(50, 150, 250, 100);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("PRESS ME!", 93, 193);
};

//Challenge Flashy Flash Card
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

draw = function() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);

    fill(0, 0, 0);
    textSize(20);
    if(mouseIsPressed) {
        text("JavaScript", 142, 200);
    } else {
        text("What programming language is this?", 39, 200);
    
    }
};