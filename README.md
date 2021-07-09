# Heapsort

A JavaScript Heapsort implementation with `O(nlog n)` complexity.

## ESM Package

Starting from `v0.2.0` this package fully moved to ES Modules and ES2015 code. This means no more build step before publishing to NPM.

Ideally you shouldn't spot any difference, but in case you face any issues, see [this useful article](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-move-my-commonjs-project-to-esm).

You can also downgrade to `v0.1.2` to use all the same functionality, precompiled to ES5.

## Install

    npm install heapsort

## API

    import heapsort from 'heapsort';

    heapsort(array[, comparator]);

If you need to save the original array you should pass a copy, because heapsort will mutate it.

Comparator is a function which compares two elements and returns 0, 1 or -1. [Read more about comparator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## License

MIT License (c) Alexey Raspopov
