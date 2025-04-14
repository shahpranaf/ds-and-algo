/**
 * @param {List [int]} input
 * @return {List [int]}
 */
/* O(n2) */
const buildProductArray = (input) => {
    // Your solution here
    const inputLength = input.length;
    if (inputLength < 2) return [];
    let index = 0;
    const result = [];

    while (index !== inputLength) {
        let product = 1;
        for (let i = 0; i < inputLength; i++) {
            if (i !== index)
                product *= input[i]
        }
        result.push(product);
        index++;
    }
    return result;
};

const input = [1, 2, 3, 4, 5];
console.log(buildProductArray(input))

const tests = [
    {
        input: [1, 2, 3, 4, 5],
        expected: [120, 60, 40, 30, 24],
        description: 'simple input',
    },
    {
        input: [0, 2, 3, 4, 5],
        expected: [120, 0, 0, 0, 0],
        description: 'with 0',
    },
    {
        input: [-1, 2, 3, 4, 5],
        expected: [120, -60, -40, -30, -24],
        description: 'with negative int',
    },
];

const validate = ({ input, expected, description }) => {
    const userAnswer = buildProductArray(input);

    if (userAnswer.length !== expected.length) {
        return { passed: false, description, expected, userAnswer };
    }

    for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i] !== expected[i]) {
            return { passed: false, description, expected, userAnswer };
        }
    }

    return { passed: true, description, expected, userAnswer };
};

tests.forEach(test => console.log(validate({input: test.input, expected: test.expected, description: test.description})))
