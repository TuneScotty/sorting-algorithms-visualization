/*
Purpose: Heap Sort sorts an array by first building a max heap,
then repeatedly moving the maximum element to the end of the array and restoring the heap property on the remaining elements.
Arguments: 'array' of type number[] (a list of numbers).
Time Complexity: O(n log n)
*/
export function HeapSort(array: number[]) {
  BuildMaxHeap(array);

  for (let i: number = array.length-1; i>0; i--) {
    const tmp: number = array[0];
    array[0] = array[i];
    array[i] = tmp;

    Heapify(array, i, 0);
  }  
  return array;
}

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

/*
Purpose: Builds a max heap from an unsorted array by enforcing the heap property.
Arguments: 'array' of type number[].
Time Complexity: O(n).
*/
export function BuildMaxHeap(array: number[]) {
    const n: number = array.length;

    for (let i: number = Math.floor(n/2)- 1; i>=0; i--) {
        Heapify(array, n, i);
    }
}