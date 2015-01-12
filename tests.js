var heapsort = require('./index');

it('should sort', function(){
	expect(heapsort([4, 3, 1, 7, 2, 5, 6, 9, 8])).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});