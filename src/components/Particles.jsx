import React, { useRef, useEffect } from 'react';

const ParticleSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 60;
    const maxRadius = 60;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Create particle objects
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.4) * 2,
    dy: (Math.random() - 0.4) * 2
  });
}

// Draw particles and connecting lines
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particleCount; i++) {
    const p1 = particles[i];
    p1.x += p1.dx;
    p1.y += p1.dy;

    // Bounce particles off canvas edges
    if (p1.x > canvas.width || p1.x < -100) {
      p1.dx = -p1.dx;
    }
    if (p1.y > canvas.height || p1.y < -100) {
      p1.dy = -p1.dy;
    }

    
    // Draw particle
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 1, 0, Math.PI * 3);

    // Set fill color to transparent
    ctx.fillStyle = 'rgba(94, 225, 230, 0.5)';          
    ctx.fill();

    
    

    // Check distance between particles
    for (let j = i + 1; j < particleCount; j++) {
      const p2 = particles[j];
      const xDist = p1.x - p2.x;
      const yDist = p1.y - p2.y;
      const distance = Math.sqrt(xDist * xDist + yDist * yDist);

      if (distance < maxRadius) {
        const opacity = (maxRadius - distance) / maxRadius;

        // Draw connecting line
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `hsla(184, 100%, 53%, ${opacity})`;
        ctx.stroke();

        if (distance < maxRadius) {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 0, 255, ${opacity-0.4})`;
          ctx.fill();
        }
      }
    }
  }

requestAnimationFrame(draw);
}

draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full z-[-0]"
    > <input type="range" name="" id="" /></canvas>
  );
};

export default ParticleSystem;