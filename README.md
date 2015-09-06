# Heapsort

A JavaScript Heapsort implementation with `O(nlog n)` complexity.

## Install

	npm install heapsort

## API

	heapsort(array[, comparator]);

If you want to save original array you should pass copy of array, because heapsort will update it.

Comparator is a function which compares two elements and returns 0, 1 or -1. [Read more about comparator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## License

MIT License (c) Alexey Raspopov
