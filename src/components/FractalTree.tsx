import React, { useEffect, useRef } from "react";

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = Math.PI / 4;
    let frameCount = 0;

    const draw = () => {
      frameCount++;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vary the angle using sin
      angle = mapRange(
        Math.sin(frameCount * 0.01),
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
      // Calculate line width based on branch depth
      const lineWidth = Math.max(3 - depth * 0.5, 0.5);
      ctx.lineWidth = lineWidth;

      // Gradient color for better visibility in light mode
      // Use darker colors that will be visible on white background
      const colors = [
        "#4de9d2", // Teal color matching your accent
        "#1a3b40", // Darker teal
        "#06684b", // Dark forest green
        "#042c29", // Very dark green
      ];

      // Get color based on depth
      const colorIndex = Math.min(depth, colors.length - 1);
      ctx.strokeStyle = colors[colorIndex];

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      ctx.translate(0, -len);

      if (len > 4) {
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
      }
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
  }, []);

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
