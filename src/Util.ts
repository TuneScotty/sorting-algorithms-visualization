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

// Heap methods

/*
Purpose: Heapify purpose is to bring the maximum value within a heap inside of an array to the top of the array,
the heap represents the unsorted region of the array & i represents the index of the largest value within the heap within the array.
Arguments: 'array' of type number[] | 'heapSize' of type number | 'i' of type number.
Time complexity: O(log n) | [n-1]
*/
export function Heapify(array: number[], heapSize: number, i: number) {
    let largest: number = i;

    const LEFT: number = i*2+1;
    const RIGHT: number = i*2+2;

    (LEFT<heapSize && array[LEFT]>array[largest]) ? largest = LEFT : null;

    (RIGHT<heapSize && array[RIGHT]>array[largest]) ? largest = RIGHT : null;
    
    if (largest != i) {
        const tmp: number = array[i];
        array[i] = array[largest];
        array[largest] = tmp;

        Heapify(array, heapSize, largest);
    }
}

export function BuildMaxHeap(array: number[]) {
    let n: number = array.length;

    for (let i: number = Math.floor(n/2)- 1; i>=0; i--) {
        Heapify(array, n, i);
    }
}