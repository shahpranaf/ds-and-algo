const getTargetIndexes = (array, target) => {
    // Your solution here
    const hashLookup = {};
    const result = [];

    for (let i = 0; i < array.length; i++) {
        hashLookup[array[i]] = i;
    }

    for (let i = 0; i < array.length; i++) {
        const subtractedValue = target - array[i];
        if (hashLookup.hasOwnProperty(subtractedValue) && subtractedValue !== array[i]) {
            result.push([i, hashLookup[subtractedValue]]);
            delete hashLookup[array[i]];
            delete hashLookup[subtractedValue]
        }
    }
    return result;
};

const array = [4, -3, 80, 2, 9, 13, 5, 8];
const target = 10;

console.log(getTargetIndexes(array, target))

const tests = [
    {
        input: { array: [1, 2], target: 3 },
        expected: [[0, 1]],
        description: 'simple input',
    },
    {
        input: { array: [3, 4, 1, 8, 9, 2, 10], target: 11 },
        expected: [[0, 3], [2, 6], [4, 5]],
        description: 'multiple results',
    },
    {
        input: { array: [4, -1, 2, 80, 9, 10, 7], target: 9 },
        expected: [[1, 5], [2, 6]],
        description: 'neg and pos matches',
    },
    {
        input: { array: [4, 8, 0], target: 8 },
        expected: [[1, 2]],
        description: 'sums with 0',
    },
    {
        input: { array: [4, -3, 80, 2, 9, 13, 5, 8], target: 10 },
        expected: [[1, 5], [3, 7]],
        description: 'won\'t match with itself',
    },
    {
        input: { array: [], target: 1 },
        expected: [],
        description: 'empty input',
    },
    {
        input: { array: [-5, 10], target: 1 },
        expected: [],
        description: 'no result input',
    },
];

const sortIndexes = (a, b) => a - b;
const sortOutputArray = (a, b) => a[0] - b[0];

const validate = ({ input, expected, description }) => {
    const userAnswer = getTargetIndexes(input.array, input.target);

    if (userAnswer.length !== expected.length) {
        return { passed: false, description, expected, userAnswer };
    }

    const sortedUserAnswer = userAnswer.map(item => item.sort(sortIndexes)).sort(sortOutputArray);
    let passed = true;

    for (let i = 0; i < sortedUserAnswer.length; i++) {
        const uai = sortedUserAnswer[i];
        const eai = expected[i];

        if (uai[0] !== eai[0] || uai[1] !== eai[1]) {
            passed = false;
        }
    }

    return { passed, description, expected, userAnswer };
};

tests.forEach(test => console.log(validate({input: test.input, expected: test.expected, description: test.description})))
