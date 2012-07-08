/**
 * Merges two sorted arrays. The arrays does not need to be the same length.
 * @param a the first _sorted_ array
 * @param b the second _sorted_ array
 */
var merge = function (a, b) {
	var merged = [];

	while (a.length > 0 || b.length > 0){
		if (a.length === 0){
			return merged.concat(b);
		}
		if(b.length === 0){
			return merged.concat(a);
		}
		if (a[0] < b[0]){
			merged.push(a.shift());
		}
		else {
			merged.push(b.shift());	
		}
	}
	return merged;
};

/**
 * Sorts an array by using merge sort
 * @param a an array to sort.
 */
var mergesort = function (a){
	var a1, a2, midpoint;

	if (a.length < 2 || (a.length === 2 && a[0] < a[1])) {
		return a;
	}
	if (a.length === 2){
		return [a[1], a[0]];
	}
	
	midpoint = Math.floor(a.length/2);
	a1 = mergesort(a.slice(0, midpoint));
	a2 = mergesort(a.slice(midpoint));

	return merge(a1,a2);
};




