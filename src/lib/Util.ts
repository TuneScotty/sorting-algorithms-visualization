import type { AlgorithmGenerator } from "./algorithms/types";

/*
Purpose: Measures and logs the execution time of a function while returning its result.
Arguments: 'tag' label used for logging of type string and 'fn' function to be executed and timed of type Generic Promise.
Time complexity: O(1) + complexity of the given fn.
*/
export const time = async <T>(tag: string, fn: () => T | Promise<T>): Promise<T> => {
  const t = performance.now();
  const r = await fn();
  console.log(`${tag}: ${performance.now() - t} ms`)
  return r
}

export const Create_Array = (len: number) =>
  Array.from({ length: len }, () => Math.floor(Math.random() * 1e5))

export const tick = (genRef: React.RefObject<AlgorithmGenerator | null>) => {
  const gen = genRef.current;
  if (!gen) return;

  const r = gen.next();
  if (r.done) {
    genRef.current = null;
    return;
  }
}