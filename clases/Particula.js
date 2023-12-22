class Particula {
  constructor(_x, _y, _color) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 100));
    this.isAlive = true;
    this.side = Math.ceil(random(3, 15));
    this.color = _color;
  }
  update() {
    this.r = random(100);

    if (this.r < 20) {
      // hacia arriba
      this.pos.y -= this.side;
    } else if (this.r < 40) {
      // hacia la derecha
      this.pos.x += this.side;
    } else if (this.r < 80) {
      // hacia abajo
      this.pos.y += this.side;
    } else {
      // hacia izquierda
      this.pos.x -= this.side;
    }

    this.lifespan -= 1;

    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }
  display() {
    fill(this.color);
    stroke(255);
    square(this.pos.x, this.pos.y, this.side);
  }
}
