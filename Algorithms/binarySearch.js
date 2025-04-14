function iterativeBinarySearch(array, target) {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    while(lowerBound <= upperBound) {
        const midPointIndex = Math.floor((lowerBound+upperBound) / 2);
        const midPointItem = array[midPointIndex];

        if(midPointItem === target) {
            return midPointIndex;
        }

        if(midPointItem > target) {
            upperBound = midPointIndex;
        } else if(midPointItem < target) {
            lowerBound = midPointIndex
        }

    }
    return -1
}

const array = [1, 2, 3, 5,7, 9, 11];

console.log(iterativeBinarySearch(array, 9))