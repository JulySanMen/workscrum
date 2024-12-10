const canvas = document.getElementById("neuralNetwork");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "#FFFFFF"; // Color de los nodos
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const distance = Math.hypot(
        particles[i].x - particles[j].x,
        particles[i].y - particles[j].y
      );
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function init() {
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}

init();
animate();