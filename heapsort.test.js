import heapsort from './heapsort';

it('should sort', () => {
	const actual = heapsort([4, 3, 1, 7, 2, 5, 6, 9, 8]);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	expect(actual).toEqual(expected);
});

it('should sort an array with duplicated items', () => {
	const actual = heapsort([4, 5, 5, 1, 3, 8, 6, 2, 9, 7, 6, 0]);
	const expected = [0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];
	expect(actual).toEqual(expected);
});

it('should sort an array with negative items', () => {
	const actual = heapsort([5, -1, 6, -10, 3, 9, 0, 8, -2]);
	const expected = [-10, -2, -1, 0, 3, 5, 6, 8, 9];
	expect(actual).toEqual(expected);
});
