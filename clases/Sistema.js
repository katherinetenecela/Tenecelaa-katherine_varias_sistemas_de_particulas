class Sistema {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.ps = [];
    this.t = random(100);
    this.colors = [
      color(random(100, 255), random(255), 0),
      color(random(100, 255), random(255), 0),
    ];
  }

  update() {
    this.t += 0.005;
    this.pos.x = map(noise(this.t), 0, 1, 0, width);
    this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);
    this.p = new Particula(
      this.pos.x,
      this.pos.y,
      lerpColor(this.colors[0], this.colors[1], noise(this.t + 20)),
      int(random(3))
    );
    this.ps.push(this.p);

    for (let i = 0; i < this.ps.length; i++) {
      if (!this.ps[i].isAlive) {
        this.ps.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].update();
      this.ps[i].display();
    }
  }

  getColor() {
    return lerpColor(this.colors[0], this.colors[1], noise(this.t));
  }
}
