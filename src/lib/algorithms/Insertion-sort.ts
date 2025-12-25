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