export default function heapsort(array, comparator = ascendantComparator) {
	let end = array.length - 1;

	heapify(array, comparator);

	while (end > 0) {
		swapElems(array, end, 0);
		end = end - 1;
		siftDown(array, 0, end, comparator);
	}

	return array;
}

function ascendantComparator(a, b) {
	return a > b ? 1 : a < b ? -1 : 0;
}

function heapify(array, comparator) {
	let count = array.length;
	let start = Math.floor((count - 2) / 2);

	while (start >= 0) {
		siftDown(array, start, count - 1, comparator);
		start = start - 1;
	}
}

function siftDown(array, start, end, comparator) {
	let root = start;

	while (root * 2 + 1 <= end) {
		let lChild = root * 2 + 1;
		let rChild = lChild + 1;
		let swap = root;

		if (comparator(array[swap], array[lChild]) < 0) {
			swap = lChild;
		}

		if (rChild <= end && comparator(array[swap], array[rChild]) < 0) {
			swap = rChild;
		}

		if (swap === root) {
			return;
		}

		swapElems(array, root, swap);
		root = swap;
	}
}

function swapElems(array, a, b) {
	let tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
}
