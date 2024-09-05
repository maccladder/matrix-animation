"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const YellowMatrixAnimation = () => {
  const router = useRouter();

  useEffect(() => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numbers = '0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FFD700'; // Yellow matrix color
      ctx.font = fontSize + 'px arial';

      for (let i = 0; i < drops.length; i++) {
        const text = numbers.charAt(Math.floor(Math.random() * numbers.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = () => {
    router.push('/');
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <canvas id="matrix" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>
      
      {/* Flèche clignotante */}
      <div
        className="blinking-arrow"
        onClick={handleArrowClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          cursor: 'pointer',
        }}
      >
        <div className="arrow-body"></div>
        <div className="arrow-head"></div>
      </div>

      <style jsx>{`
        .arrow-body {
          width: 150px;
          height: 20px;
          background-color: orange;
          animation: blink 1s infinite;
        }

        .arrow-head {
          width: 0;
          height: 0;
          border-left: 30px solid orange;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default YellowMatrixAnimation;
