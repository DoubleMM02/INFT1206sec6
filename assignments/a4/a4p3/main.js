// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.x = y;
    this.x = velX;
    this.x = velY;
    this.x = color;
    this.x = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }
    
    if (this.x - this.size <= 0) {
    this.velX = Math.abs(this.velX);
    }
    
    if (this.y + this.size >= height) {
    this.velY = -Math.abs(this.velY);
  }
  
  if (this.y - this.size <= 0) {
    this.velX = -Math.abs(this.velY);
  }

  this.x += this.velX;
  this.x += this.velY;

}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}