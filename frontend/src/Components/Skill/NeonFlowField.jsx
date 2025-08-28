import { useEffect, useRef } from "react";

/**
 * NeonFlowField
 * - Renders animated glowing paths (flow field) over your stat card.
 * - Add <NeonFlowField/> as an absolutely-positioned child inside your card.
 */
export default function NeonFlowField({
  color = "#9b5cff",           // main neon color (purple)
  accent = "#7cf3ff",          // optional secondary tint
  density = 0.35,              // particles per 1,000 px² (0.25–0.6 looks good)
  lineWidth = [0.6, 3.3],      // min/max stroke width
  blur = 18,                   // glow strength
  fade = 0.07,                 // trail fade amount per frame (0.05–0.12)
  speed = 1.8,                 // particle speed multiplier
  scale = 0.008               // noise scale (smaller = larger swirls)
}) {
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    // Hi-DPI sizing
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function resize() {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // --- Perlin noise (3D) for smooth, time-varying vector field ---
    const perm = new Uint8Array(512);
    (function seed() {
      const p = new Uint8Array(256);
      for (let i = 0; i < 256; i++) p[i] = i;
      for (let i = 255; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [p[i], p[j]] = [p[j], p[i]];
      }
      for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
    })();
    const fadeFn = t => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + t * (b - a);
    function grad(hash, x, y, z) {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }
    function noise3(x, y, z) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
      const u = fadeFn(x), v = fadeFn(y), w = fadeFn(z);
      const A = perm[X] + Y,  AA = perm[A] + Z,  AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
      return lerp(
        lerp(
          lerp(grad(perm[AA], x, y, z),     grad(perm[BA], x - 1, y, z),     u),
          lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u),
          v
        ),
        lerp(
          lerp(grad(perm[AA + 1], x, y, z - 1),     grad(perm[BA + 1], x - 1, y, z - 1),     u),
          lerp(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u),
          v
        ),
        w
      );
    }

    // --- Particles that follow the noise field and leave neon trails ---
    const particles = [];
    function spawnParticles() {
      particles.length = 0;
      const { clientWidth: w, clientHeight: h } = canvas;
      const count = Math.max(80, Math.floor((w * h / 1000) * density));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          px: 0, py: 0,
          life: 0,
          maxLife: 200 + (Math.random() * 200) | 0,
          w: lineWidth[0] + Math.random() * (lineWidth[1] - lineWidth[0]),
          tintMix: Math.random() * 0.6 + 0.2 // how much accent color blends in
        });
      }
    }
    spawnParticles();

    // draw setup
    ctx.globalCompositeOperation = "lighter"; // additive = neon
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let t0 = performance.now();
    function frame(now) {
      const dt = Math.min(32, now - t0); // ms cap
      t0 = now;
      const { clientWidth: w, clientHeight: h } = canvas;

      // subtle fade to create trails
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(255,255,255,${fade})`; // if your card has a bg, this should match it
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      const time = now * 0.00035; // time scale for noise

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // compute field angle from time-varying 3D Perlin noise
        const nx = p.x * scale, ny = p.y * scale;
        const angle = noise3(nx, ny, time) * Math.PI * 2;

        // step forward
        const vel = speed * (0.7 + 0.6 * Math.random()); // slight randomness
        p.px = p.x; p.py = p.y;
        p.x += Math.cos(angle) * vel;
        p.y += Math.sin(angle) * vel;

        // wrap or respawn if out of bounds / old
        p.life++;
        if (p.x < -2 || p.y < -2 || p.x > w + 2 || p.y > h + 2 || p.life > p.maxLife) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.px = p.x;
          p.py = p.y;
          p.life = 0;
          continue;
        }

        // neon stroke (color shifts between main + accent)
        ctx.shadowBlur = blur;
        const mix = p.tintMix * (0.6 + 0.4 * Math.sin((p.x + p.y) * 0.02 + time * 6));
        ctx.strokeStyle = lerpColor(color, accent, mix);
        ctx.lineWidth = p.w;

        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      raf.current = requestAnimationFrame(frame);
    }

    raf.current = requestAnimationFrame(frame);

    // helpers
    function lerpColor(aHex, bHex, t) {
      const a = hexToRgb(aHex), b = hexToRgb(bHex);
      const r = Math.round(lerp(a.r, b.r, t));
      const g = Math.round(lerp(a.g, b.g, t));
      const bl = Math.round(lerp(a.b, b.b, t));
      return `rgb(${r},${g},${bl})`;
    }
    function hexToRgb(hex) {
      const h = hex.replace("#", "");
      const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    // cleanup
    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, [accent, blur, density, fade, lineWidth, scale, speed, color]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        mixBlendMode: "screen",
        height: "40dvh",
        width: "100dvw",
        borderRadius: "10px"
      }} // lets neon blend with your card nicely
    />
  );
}
