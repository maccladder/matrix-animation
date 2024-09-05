"use client"; // <-- Add this line

import { useEffect } from 'react';

const MatrixAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numbers = '0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for(let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px arial';

      for(let i = 0; i < drops.length; i++) {
        const text = numbers.charAt(Math.floor(Math.random() * numbers.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix" style={{ display: 'block', margin: 0, overflow: 'hidden', background: 'black' }}></canvas>;
};

export default MatrixAnimation;
