class Particula {
  constructor(_x, _y, _color, _shape) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 100));
    this.isAlive = true;
    this.size = Math.ceil(random(3, 15));
    this.color = _color;
    this.shape = _shape;
  }

  update() {
    this.r = random(100);

    if (this.r < 20) {
      this.pos.y -= this.size;
    } else if (this.r < 40) {
      this.pos.x += this.size;
    } else if (this.r < 80) {
      this.pos.y += this.size;
    } else {
      this.pos.x -= this.size;
    }

    this.lifespan -= 1;

    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }

  display() {
    fill(this.color);
    stroke(255);
    if (this.shape === 1) {
      // Triangle
      triangle(
        this.pos.x,
        this.pos.y - this.size,
        this.pos.x - this.size,
        this.pos.y + this.size,
        this.pos.x + this.size,
        this.pos.y + this.size
      );
    } else if (this.shape === 2) {
      // Circle
      ellipse(this.pos.x, this.pos.y, this.size * 2, this.size * 2);
    } else {
      // Square (default)
      square(this.pos.x, this.pos.y, this.size);
    }
  }
}
