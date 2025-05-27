import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let angle = Math.PI / 4;
    let frameCount = 0;

    // Pre-calculate colors for better performance
    const darkColors = [
      "#ffffff",
      "#f0f8ff",
      "#00ffff",
      "#40e0d0",
      "#7fffd4",
      "#98fb98",
      "#ffffe0",
      "#fff8dc",
    ];

    const lightColors = [
      "#000000",
      "#2c2c2c",
      "#4a4a4a",
      "#006400",
      "#8b4513",
      "#4b0082",
      "#800080",
      "#8b0000",
    ];

    const colors = resolvedTheme === "dark" ? darkColors : lightColors;

    // Optimize canvas settings
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const draw = () => {
      frameCount++; // Clear canvas completely for transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vary the angle using sin for smooth animation
      angle = mapRange(
        Math.sin(frameCount * 0.02),
        -1,
        1,
        Math.PI / 2,
        Math.PI / 16
      );

      // Start drawing
      ctx.save();
      ctx.translate(200, canvas.height);
      branch(ctx, 100, 0);
      ctx.restore();

      requestIdRef.current = requestAnimationFrame(draw);
    };

    const branch = (
      ctx: CanvasRenderingContext2D,
      len: number,
      depth: number = 0
    ) => {
      // Limit recursion depth for better performance
      if (depth > 7 || len < 3) return;

      // Calculate line width based on branch depth
      const lineWidth = Math.max(3 - depth * 0.4, 0.5);
      ctx.lineWidth = lineWidth;

      // Use simple color selection instead of gradients for performance
      const colorIndex = Math.min(depth, colors.length - 1);
      ctx.strokeStyle = colors[colorIndex];

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      ctx.translate(0, -len);

      // Right branch
      ctx.save();
      ctx.rotate(angle);
      branch(ctx, len * 0.67, depth + 1);
      ctx.restore();

      // Left branch
      ctx.save();
      ctx.rotate(-angle);
      branch(ctx, len * 0.67, depth + 1);
      ctx.restore();
    };

    // Helper function to map values from one range to another
    const mapRange = (
      value: number,
      a1: number,
      a2: number,
      b1: number,
      b2: number
    ): number => {
      return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1);
    };

    // Start animation
    requestIdRef.current = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [resolvedTheme]);
  return (
    <div id="fractal-tree" className="relative">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-32 h-32 md:w-32 sm:w-24"
      />
    </div>
  );
};

export default FractalTree;
