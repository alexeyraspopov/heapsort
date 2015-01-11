function ascendantComparator(a, b){
	return a - b;
}

module.exports = function(array, comparator){
	comparator = comparator || ascendantComparator;

};