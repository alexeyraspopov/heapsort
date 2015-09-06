export default heapsort;

const {floor} = Math;

function heapsort(array, comparator=ascendantComparator) {
	const count = array.length;

	heapify(array);

	let end = count - 1;

	while (end > 0) {
		swapElems(array, end, 0);
		end = end - 1;
		siftDown(array, 0, end);
	}

	return array;
}

function ascendantComparator(a, b) {
	return a - b;
}

function heapify(array) {
	const count = array.length;
	let start = floor((count - 2) / 2);

	while (start >= 0) {
		siftDown(array, start, count - 1);
		start = start - 1;
	}
}

function siftDown(array, start, end) {
	let root = start;

	while (root * 2 + 1 <= end) {
		let child = root * 2 + 1;
		let swap = root;

		// comparison here
		if (array[swap] < array[child]) {
			swap = child;
		}

		if (child + 1 <= end && array[swap] < array[child + 1]) {
			swap = child + 1;
		}

		if (swap === root) {
			return;
		}

		swapElems(array, root, swap);
		root = swap;
	}
}

function swapElems(array, a, b) {
	const tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
}