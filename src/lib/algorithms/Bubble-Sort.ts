import type { AlgorithmGenerator } from "./types";

/*
Purpose: Bubble Sort sorts an array by repeatedly iterating through it and comparing adjacent elements.
During each pass, if the element at index j is greater than the element at j + 1, the two values are swapped.
After each full pass, the largest unsorted element is guaranteed to be placed at the rightmost unsorted position.
Arguments: 'array' of type number[] (a list of numbers).
Time complexity: O(n)²
*/
export const BubbleSort = function* (array: number[]): AlgorithmGenerator {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const a = j;
      const b = j + 1;

      let swapped = false;
      if (array[a] > array[b]) {
        const tmp = array[a];
        array[a] = array[b];
        array[b] = tmp;
        swapped = true;
      }

      yield { type: "compare", indices: [a, b], swapped };
    }
  }
};