
//PROJECT : Animal ATTACK
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW/2;
var eyeX = bodyX-10;
var eyeY = bodyY-78;
var footX = bodyX - 49;
var footY = bodyY - 20;

draw = function() {
    background(207, 254, 255);
    fill(237, 19, 19);
    
    ellipse(bodyX, bodyY-70, faceW, 47); // face?
    
    line(footX,footY,footX-51,footY-70);
    line(footX,footY+16,footX-67,footY-1);
    line(footX,footY+39,footX-78,footY+75);
    
    line(footX + 100,footY,footX + 152,footY - 70);
    line(footX + 100,footY + 18,footX + 171,footY + 1);
    line(footX + 100,footY + 39,footX + 152,footY + 71);
    fill(0, 0, 0);
    var eyeSize = faceW/6;
    ellipse(eyeX,eyeY,eyeSize,eyeSize);
    ellipse(eyeX+20,eyeY,eyeSize,eyeSize);
    eyeY--;
    
    fill(240, 19, 19);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    fill(0, 0, 0);
    // dott
    ellipse(bodyX + 25,bodyY -20,15/59 * bodyW, 10/59*bodyW);
    ellipse(bodyX - 25,bodyY + 3,15/59 * bodyW, 21/59*bodyW);
    ellipse(bodyX + 20,bodyY + 16,15/59 * bodyW,15/59 * bodyW);
};

//CHALLANGE : Mouse Tracker
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

fill(255, 0, 255);

draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12); 
    var label = mouseX + " , " + mouseY;
    text(label,mouseX,mouseY);
};

//Project : Add Design
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

background(34, 230, 230);
fill(255, 0, 0);
textSize(30);
text("Arf Trans", 10, 30);
textSize(21);
text("Resident's mainstay bus transportation",10,60);
textSize(17);
text("Facilities: sleeping class, free wifi, snacks,karaoke", 10, 90);

//snacks
rect(183,125,50,46);
rect(183,125,50,10);

noStroke();
//sleeping class
rect(10,150,50,15);
rect(53,136,7,15);

//karaoke
triangle(127,157,139,199,147,156);
fill(0, 0, 0);
ellipse(136,145,20,20);

//Challange : Say Your Name
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

var sayHi = function() {
    var textX = random(0, 300);
    var textY = random(0, 300);
    var yourName = "Fermi Naufal Akbar";

    fill(255, 0, 0);
    textSize(30);
    text("Hiiii, " + yourName, textX, textY);
};

sayHi();
sayHi();
sayHi();
sayHi();

//Challange : Moles in Holes
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

var drawMole = function(moleX, moleY) {
    // var moleX = 248;
    // var moleY = 185;
    
    noStroke();
    fill(125, 93, 43);
    ellipse(moleX, moleY, 60, 60); // face
    fill(255, 237, 209);
    ellipse(moleX, moleY+10, 33, 28); 
    fill(0, 0, 0);
    ellipse(moleX-10, moleY-15, 10, 10); // eyes
    ellipse(moleX+10, moleY-15, 10, 10);
    ellipse(moleX, moleY-5, 10, 10); // nose
    ellipse(moleX, moleY+10, 20, 5); // mouth
};

background(52, 168, 83); // green grass
fill(0, 0, 0);
ellipse(200, 200, 100, 30); // holes!
ellipse(70, 119, 100, 30);
ellipse(300, 60, 100, 30);
ellipse(297, 350, 100, 30);
drawMole(200,185);
drawMole(307,38);
drawMole(72,95);
drawMole(297,325);

//Challage : Calculator
//CAMP ID = BE2000848
//Nama = Fermi Naufal Akbar

var add = function(num1, num2) {
    return num1 + num2;
};
var subtract = function(num1, num2) {
    return num1 - num2;
};
var multiply = function(num1, num2) {
    return num1 * num2;
};
var divide = function(num1, num2) {
    return num1 / num2;
};

fill(255, 0, 0);
text("15 + 3 is " + add(15, 3), 10, 20);
text("15 - 3 is " + subtract(15, 3), 10, 50);
text("15 * 3 is " + multiply(15, 3), 10, 80);
text("15 / 3 is " + divide(15, 3), 10, 110);

text("8 + 4 is " + add(8, 4), 10, 170);
text("8 - 4 is " + subtract(8, 4), 10, 200);
text("8 * 4 is " + multiply(8, 4), 10, 230);
text("8 / 4 is " + divide(8, 4), 10, 260);