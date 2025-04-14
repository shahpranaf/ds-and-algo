/**
 * @param {number[]} prices
 * @return {number}
 * O(n)
 */
const getMaxProfit = (prices) => {
    // Your solution here
    let dayCount = prices?.length;
    let currentMinPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i <= dayCount; i++) {
        if (prices[i] <= currentMinPrice) {
            currentMinPrice = prices[i];
        } else {
            const currentProfit = prices[i] - currentMinPrice
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit;
};

const prices = [9, 2, 4, 3, 8, 5];

console.log(getMaxProfit(prices))

const tests = [
    {
        input: [],
        expected: 0,
        description: 'empty prices',
    },
    {
        input: [42],
        expected: 0,
        description: 'one price',
    },
    {
        input: [9, 2, 4, 3, 8, 5],
        expected: 6,
        description: 'question prompt example',
    },
    {
        input: [10, 7, 3, 4, 6],
        expected: 3,
        description: 'price decrease then increase',
    },
    {
        input: [3, 4, 5, 10, 7],
        expected: 7,
        description: 'price increase then decrease',
    },
    {
        input: [3, 4, 5, 10, 2, 20],
        expected: 18,
        description: 'replace previous max',
    },
    {
        input: [1, 2, 3, 4, 5, 6],
        expected: 5,
        description: 'always increasing',
    },
    {
        input: [6, 5, 4, 3, 2, 1],
        expected: 0,
        description: 'always decreasing',
    },
    {
        input: [1, 5, 1, 5, 2, 5],
        expected: 4,
        description: 'repeated numbers',
    },
    {
        input: [42, 42, 42, 42],
        expected: 0,
        description: 'price never changes',
    },
];

const validate = ({ input, expected, description }) => {
    const userAnswer = getMaxProfit(input);
    const passed = userAnswer === expected;

    return { 
        passed, 
        // description, expected, userAnswer 
        };
};

tests.forEach(test => console.log(validate({input: test.input, expected: test.expected, description: test.description})))
