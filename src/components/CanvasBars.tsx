import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from "react";

const MAX_VAL = 100_000;

export type CanvasBarsHandle = {
  draw: (arr: number[]) => void;
};

export const CanvasBars = forwardRef<CanvasBarsHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctxRef.current = ctx;
  }, []);

  useImperativeHandle(ref, () => ({
    draw(arr: number[]) {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      const n = arr.length;
      if (n === 0) return;

      const barW = w / n;

      for (let i = 0; i < n; i++) {
        const v = arr[i];
        const barH = (v / MAX_VAL) * h;
        ctx.fillStyle = "#2739da98";
        ctx.fillRect(
          i * barW,
          h - barH,
          Math.max(1, barW),
          barH
        );
      }
    }
  }));

  return <canvas ref={canvasRef} className="justify-self-center mt-30 w-[40%] h-90 mt-30" />;
});
