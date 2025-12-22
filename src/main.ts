import './style.css'
import { BubbleSort, HeapSort, InsertionSort } from './Algorithms.ts'
import { time } from './Util.ts'

const base = Array.from({ length: 5000 }, () => Math.floor(Math.random() * 100000));
console.log(await time('BubbleSort', () => BubbleSort([...base])));
console.log(await time('InsertionSort', () => InsertionSort([...base])));
console.log(await time('HeapSort', () => HeapSort([...base])));