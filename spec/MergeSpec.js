describe("Merge", function() {
    it("merge with both empty", function() {
        expect(merge([], [])).toEqual([]);
    });
    it("merge with empty left side", function() {
        expect(merge([], [1])).toEqual([1]);
    });
    it("merge with empty right side", function() {
        expect(merge([2], [])).toEqual([2]);
    });
    it("2 numbers", function() {
        expect(merge([1], [2])).toEqual([1,2]);
    });
    it("2 numbers, not sorted", function() {
        expect(merge([2], [1])).toEqual([1,2]);
    });
    it("8 numbers", function() {
        expect(merge([1,5,7,8], [2,3,4,6])).toEqual([1,2,3,4,5,6,7,8]);
    });
    it("negative numbers", function() {
        expect(merge([-2,0,7,8], [2,3,4,60])).toEqual([-2,0,2,3,4,7,8,60]);
    });
    it("same numbers", function() {
        expect(merge([1,5,5,8], [2,5,5,6])).toEqual([1,2,5,5,5,5,6,8]);
    });
    it("very different sizes", function() {
        expect(merge([1,5,8], [2,5,5,6,7,7,8,9,10])).toEqual([1,2,5,5,5,6,7,7,8,8,9,10]);
    });
    it("very different sizes", function() {
        expect(merge([2,5,5,6,7,7,8,9,10], [1,5,8])).toEqual([1,2,5,5,5,6,7,7,8,8,9,10]);
    });
    // TODO: Add a random number merge
});

describe("MergeSort", function() {
    it("sort empty array", function() {
        expect(mergesort([])).toEqual([]);
    });
    it("sort array with 1 element", function() {
        expect(mergesort([1])).toEqual([1]);
    });
    it("sort sorted array", function() {
        expect(mergesort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });
    it("sort reversed array", function() {
        expect(mergesort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });
});