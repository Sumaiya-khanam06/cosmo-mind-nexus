import { useEffect, useRef } from "react";

export function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1.5 + 0.2,
      r: Math.random() * 1.4 + 0.2,
      tw: Math.random() * Math.PI * 2,
    }));

    const colors = ["#7dd3fc", "#a78bfa", "#f0abfc", "#67e8f9"];

    const tick = () => {
      ctx.fillStyle = "rgba(8, 6, 18, 0.35)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s, i) => {
        s.tw += 0.02;
        s.y += s.z * 0.15;
        if (s.y > canvas.height) s.y = 0;
        const a = 0.5 + Math.sin(s.tw) * 0.5;
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.globalAlpha = a * 0.9;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden
    />
  );
}
