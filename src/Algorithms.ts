import { Heapify, BuildMaxHeap } from "./Util";

/*
Purpose: Bubble Sort sorts an array by repeatedly iterating through it and comparing adjacent elements.
During each pass, if the element at index j is greater than the element at j + 1, the two values are swapped.
After each full pass, the largest unsorted element is guaranteed to be placed at the rightmost unsorted position.
Arguments: 'array' of type number[] (a list of numbers).
Time complexity: O(n)²
*/
export function BubbleSort(array: number[]) {
  for (let i: number = 0; i < array.length; i++) {
    for (let j: number = 0; j < array.length-i-1; j++) {
    const tmp: number = array[j];
    array[j]>array[j+1] ? (array[j] = array[j+1]) && (array[j+1] = tmp) : null
    }
  }
  return array
}

/*
Purpose: Insertion Sort sorts an array by growing a sorted section from left to right.
At each index i, it takes the value at i and shifts elements to the right in the already-sorted left part as long as they are larger, 
until it finds the correct position to insert the value.
Arguments: 'array' of type number[] (a list of numbers).
Time complexity: O(n)² <-> O(n)
*/
export function InsertionSort(array: number[]) {
  for (let i: number = 1; i < array.length; i++) {
    const key: number = array[i];
    let j: number = i -1;

    while (j >= 0 && array[j] > key) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = key;
  }
  return array
}

/*
Purpose: Heap Sort sorts an array by first building a max heap,
then repeatedly moving the maximum element to the end of the array and restoring the heap property on the remaining elements.
Arguments: 'array' of type number[] (a list of numbers).
Time Complexity: O(n log n)
*/
export function HeapSort(array: number[]) {
  BuildMaxHeap(array);

  for (let i: number = array.length-1; i>0; i--) {
    let tmp: number = array[0];
    array[0] = array[i];
    array[i] = tmp;

    Heapify(array, i, 0);
  }  
  return array;
} 