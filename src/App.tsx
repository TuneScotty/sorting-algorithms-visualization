import { useEffect, useRef, useState } from 'react';
import { CanvasBars } from './components/CanvasBars';
import { Create_Array, tick } from './lib/Util';
import { BubbleSort } from './lib/algorithms/Bubble-Sort';
import type { AlgorithmGenerator } from './lib/algorithms/types';
import type { CanvasBarsHandle } from './components/CanvasBars';
import './App.css'

function App() {
  const timerRef = useRef<number | null>(null)
  const genRef = useRef<AlgorithmGenerator | null>(null)
  const canvasRef = useRef<CanvasBarsHandle | null>(null);
  const arrayRef = useRef<number[]>([]);
  const [arrVal, setArr] = useState(512)

  useEffect(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    timerRef.current = window.setInterval(() => {
      tick(genRef)
      canvasRef.current?.draw(arrayRef.current)
    }, 10)

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  return (
    <>
        <label className="text-1xl font-bold">
          Array Length (2-1024): {arrVal}
        </label>
        <br></br>
        <input min={2} max={1024} type='range' step={1} value={arrVal}
          onInput={(e) => {
            setArr(Number(e.currentTarget.value))
          }}
          onMouseUp={(e) => {
            const length = Number(e.currentTarget.value)
            if (length <= 1024) {
              arrayRef.current = Create_Array(length)
              genRef.current = BubbleSort(arrayRef.current)
              canvasRef.current?.draw(arrayRef.current)
              return
            }
            alert('Value is out of bounds.')
          }}>
        </input>
      <CanvasBars ref={canvasRef} />
    </>
  )
}

export default App