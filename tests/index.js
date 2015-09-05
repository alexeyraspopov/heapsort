import assert from "assert";
import heapsort from "../lib/index";

it("should sort", function(){
	const MSG = "should be sorted";

	assert.deepEqual(heapsort([4, 3, 1, 7, 2, 5, 6, 9, 8]), [1, 2, 3, 4, 5, 6, 7, 8, 9], MSG);
});
