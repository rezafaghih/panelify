import { useEffect, useRef } from "react";

export default function OrbitSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // =============================
    // CONFIG
    // =============================
    const ITEM_COUNT = 60;
    const RADIUS = 220;
    const FOV = 500;
    const CAMERA_DISTANCE = 400;

    // =============================
    // STATE
    // =============================
    let rotationX = 0;
    let rotationY = 0;

    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    let velocityX = 0;
    let velocityY = 0;

    // =============================
    // MATH UTILS
    // =============================
    function generateSpherePoints(count, radius) {
      const points = [];

      for (let i = 0; i < count; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        points.push({
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi),
          label: `Item ${i + 1}`
        });
      }

      return points;
    }

    function rotateX(point, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        ...point,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos
      };
    }

    function rotateY(point, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        ...point,
        x: point.x * cos - point.z * sin,
        z: point.x * sin + point.z * cos
      };
    }

    function project(point) {
      const scale = FOV / (CAMERA_DISTANCE + point.z);
      return {
        x: point.x * scale + width / 2,
        y: point.y * scale + height / 2,
        scale
      };
    }

    // =============================
    // DATA
    // =============================
    const points = generateSpherePoints(ITEM_COUNT, RADIUS);

    // =============================
    // DRAW LOOP
    // =============================
    function draw() {
      ctx.clearRect(0, 0, width, height);

      rotationX += velocityY;
      rotationY += velocityX;

      velocityX *= 0.95;
      velocityY *= 0.95;

      const transformed = points.map(p => {
        let rotated = rotateY(p, rotationY);
        rotated = rotateX(rotated, rotationX);
        const projected = project(rotated);
        return { ...rotated, ...projected };
      });

      // depth sort
      transformed.sort((a, b) => a.z - b.z);

      transformed.forEach(p => {
        const size = 8 * p.scale;
        const alpha = Math.min(1, Math.max(0.3, p.scale));

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();

        // text (optional)
        ctx.font = `${10 * p.scale}px Arial`;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.textAlign = "center";
        ctx.fillText(p.label, p.x, p.y - size - 4);
      });

      requestAnimationFrame(draw);
    }

    draw();

    // =============================
    // MOUSE EVENTS
    // =============================
    function onMouseDown(e) {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    }

    function onMouseUp() {
      isDragging = false;
    }

    function onMouseMove(e) {
      if (!isDragging) return;

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      velocityX = dx * 0.002;
      velocityY = dy * 0.002;

      lastX = e.clientX;
      lastY = e.clientY;
    }

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    // =============================
    // RESIZE
    // =============================
    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", onResize);

    // =============================
    // CLEANUP
    // =============================
    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        background: "#050505",
        display: "block"
      }}
    />
  );
}
