'use client';

import { useEffect, useRef } from 'react';

// Orijinal sitenin tam ekran arka planı: görsel + mor ışıma + aşağı akan
// "veri ışınları" ve fareyle etkileşen veri düğümleri (app.js → setupCanvasAnimation).
export default function Arkaplan() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: null, y: null, radius: 180 };
    let raf;

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = null; mouse.y = null; };
    const onResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);

    // 1. Aşağı doğru akan dijital ışınlar
    function createBeam(initialY = null) {
      const isCyan = Math.random() > 0.45;
      const isPink = !isCyan && Math.random() > 0.5;
      const color = isCyan ? '56, 189, 248' : isPink ? '244, 114, 182' : '192, 132, 252';
      return {
        x: Math.random() * width,
        y: initialY !== null ? initialY : Math.random() * height,
        length: Math.random() * 160 + 60,
        speed: Math.random() * 3.8 + 2.4,
        width: Math.random() * 1.8 + 1.1,
        color,
        headGlow: isCyan ? '#38bdf8' : isPink ? '#f472b6' : '#c084fc',
        alpha: Math.random() * 0.45 + 0.5,
      };
    }
    const beams = Array.from({ length: 55 }, () => createBeam());

    // 2. Yüzen veri düğümleri
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 3.0 + 1.8,
      pulse: Math.random() * Math.PI,
      color: Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(192, 132, 252, ',
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < beams.length; i++) {
        const b = beams[i];
        b.y += b.speed;
        if (b.y - b.length > height) {
          beams[i] = createBeam(-b.length - Math.random() * 60);
          continue;
        }
        const grad = ctx.createLinearGradient(b.x, b.y - b.length, b.x, b.y);
        grad.addColorStop(0, `rgba(${b.color}, 0)`);
        grad.addColorStop(0.65, `rgba(${b.color}, ${b.alpha * 0.55})`);
        grad.addColorStop(1, `rgba(${b.color}, ${b.alpha})`);
        ctx.beginPath();
        ctx.moveTo(b.x, b.y - b.length);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = b.width;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.width * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.95})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = b.headGlow;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (mouse.x !== null && Math.abs(b.x - mouse.x) < 80) b.y += b.speed * 0.4;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.04;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (0.5 + Math.sin(p.pulse) * 0.4) + ')';
        ctx.fill();

        if (mouse.x !== null && mouse.y !== null) {
          const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (md < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * (1 - md / mouse.radius)})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(192, 132, 252, ${0.5 * (1 - d / 150)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div className="bg-fullscreen-image" />
      <div className="bg-ambient-glow" />
      <canvas ref={canvasRef} className="bg-canvas-nodes" />
    </>
  );
}
