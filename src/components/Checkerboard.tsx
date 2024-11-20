import { useRef, useEffect, useCallback } from "preact/hooks";

interface CheckerboardProps {
  size: number;
  borderColor: string;
  borderWidth: number;
}

export const Checkerboard = ({
  size,
  borderColor,
  borderWidth,
}: CheckerboardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeTimeoutRef = useRef<number>();

  const drawCheckerboard = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.floor(width / size);
      const rows = Math.floor(height / size);
      const offsetX = (width - cols * size) / 2;
      const offsetY = (height - rows * size) / 2;

      ctx.beginPath();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * size;
          const y = offsetY + row * size;

          if (row < rows - 1) {
            ctx.moveTo(x, y + size);
            ctx.lineTo(x + size, y + size);
          }
          if (col < cols - 1) {
            ctx.moveTo(x + size, y);
            ctx.lineTo(x + size, y + size);
          }
        }
      }

      ctx.stroke();
    },
    [size, borderColor, borderWidth],
  );

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = parent.clientWidth * dpr;
    canvas.height = parent.clientHeight * dpr;
    canvas.style.width = `${parent.clientWidth}px`;
    canvas.style.height = `${parent.clientHeight}px`;

    ctx.scale(dpr, dpr);
    drawCheckerboard(ctx, parent.clientWidth, parent.clientHeight);
  }, [drawCheckerboard]);

  const debouncedResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      window.clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = window.setTimeout(handleResize, 100);
  }, [handleResize]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [handleResize, debouncedResize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
      }}
    />
  );
};

export default Checkerboard;
