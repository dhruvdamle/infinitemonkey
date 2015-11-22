var serial;
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here
var inData;
var xPos = 0;
var yPos = 20;
var lastChar = 0;
var chars = ["a", "a", "a", "a", "a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "h", "h", "h", "h", "h", "h", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "s", "s", "t", "t", "t", "t", "t", "t", "t", "t", "t", "u", "u", "u", "v", "w", "w", "x", "y", "y", "z"];

function setup() {

  createCanvas(600, 600);
  background(0);
  fill(255);
  textSize(32);
  frameRate(30);
  textFont("courier");

}

function draw() {
  var character = int(random(1, 135)); //33-58 is a-z. 32 is space.
  if (character >= 103)
    text(" ", xPos, yPos);
  else
    text(chars[character], xPos, yPos);

  lastChar = character;
  xPos = (xPos + 20) % width;
  if (xPos < 20)
    yPos = yPos + 30;

  if (yPos + 10 > height) {
    xPos = 0;
    yPos = 20;

  }
  //background(255,15);
  background(0, 5);
}