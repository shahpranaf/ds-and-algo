const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;

}


const {
    runTest,
    testSummary,
    resetTests
} = require('../testRunner'); // Optional, if using the reusable runner

resetTests();

runTest("Sort [5, 1, 3, 2]", () => {
    const result = insertionSort([5, 1, 3, 2]);
    return result;
});

runTest("Sort [22, 16, 12, 15, 29,30]", () => {
    const result = insertionSort([22, 16, 12, 15, 29, 30]);
    return result;
});

// O(n2) worst and avg
// O(n) in best where array is nearly sorted
// Space: O(1) as its in-place sorting
