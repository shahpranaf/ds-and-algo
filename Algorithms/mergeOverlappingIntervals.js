/**
 * @param {List[map<str,int>]} intervals
 * @return {List[map<str,int>]}
 */
const mergeOverlappingIntervals = (intervals) => {
    if (intervals.length === 0) {
        return [];
    }

    // Sort by start time to get the meetings in the order they occur throughout the day
    intervals.sort((a, b) => a.start - b.start);

    // The combined intervals array is initialized to the first meeting
    const mergedIntervals = [intervals[0]];

    intervals.forEach((currentInterval) => {
        const latestMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        const isOverlapping = currentInterval.start <= latestMergedInterval.end;

        if (isOverlapping) {
            // Get the latest end-time since they overlap and set it as the end time of the combined interval
            latestMergedInterval.end = Math.max(currentInterval.end, latestMergedInterval.end);
        } else {
            /*
              Since currentInterval had the earliest start time of the remaining items,
              no additional items can overlap the latestMergedInterval interval we compared currentInterval to.
      
              Add the currentInterval as the last item to the merged interval's output since it did not overlap.
              This will be the latest merged interval on the next iteration that we compare against.
            */
            mergedIntervals.push(currentInterval);
        }
    });

    return mergedIntervals;
}

const intervals = [
    { start: 9, end: 10.5 },
    { start: 9.5, end: 10 },
    { start: 10, end: 11 },
    { start: 10.5, end: 11.5 },
    { start: 13, end: 14 },
    { start: 13.5, end: 15 },
];
mergeOverlappingIntervals(intervals);