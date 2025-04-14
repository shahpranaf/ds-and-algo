/**
 * @param {List[List[int]]} matrix
 * @return {List[int]}
 */
const walkMatrix = (matrix) => {
    // Your solution here
    if(!matrix) return;
    const columnCount = matrix[0].length;
    const rowCount = matrix.length;
    let startRow = 0;
    let endRow = rowCount - 1;
    let startColumn = 0;
    let endColumn = columnCount - 1;

    const resultArr = [];
    while (endRow >= startRow && endColumn >= startColumn) {

        for (let column = startColumn; column <= endColumn; column++) {
            resultArr.push(matrix[startRow][column])
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            resultArr.push(matrix[row][endColumn])
        }
        endColumn--;

        if (endRow >= startRow) {

            for (let column = endColumn; column >= startColumn; column--) {
                resultArr.push(matrix[endRow][column])
            }
        }
        endRow--;

        if (endColumn >= startColumn) {
            for (let row = endRow; row >= startRow; row--) {
                resultArr.push(matrix[row][startColumn])
            }
            startColumn++;
        }
    }
    return resultArr;
};

const matrix = [
    [0, 1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
];

const tests = [
    {
        input: [[]],
        expected: [],
        description: 'empty matrix',
    },
    {
        input: [[1]],
        expected: [1],
        description: '1x1',
    },
    {
        input: [[1, 2, 3]],
        expected: [1, 2, 3],
        description: '1 x c matrix',
    },
    {
        input: [[1], [2], [3]],
        expected: [1, 2, 3],
        description: 'r x 1 matrix',
    },
    {
        input: [[1, 2], [4, 3]],
        expected: [1, 2, 3, 4],
        description: '2x2',
    },
    {
        input: [[0, 1, 2, 3], [11, 12, 13, 4], [10, 15, 14, 5], [9, 8, 7, 6]],
        expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: 'square matrix',
    },
    {
        input: [[2, 4, 1, 3], [10, 50, 6, 5], [19, 20, 21, 22]],
        expected: [2, 4, 1, 3, 5, 22, 21, 20, 19, 10, 50, 6],
        description: "numbers aren't explicitly increasing",
    },
    {
        input: [[1, 2, 3, 4], [10, 11, 12, 5], [9, 8, 7, 6]],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        description: 'wide matrix',
    },
    {
        input: [[1, 2, 3], [12, 13, 4], [11, 14, 5], [10, 15, 6], [9, 8, 7]],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: 'tall matrix',
    },
    {
        input: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [22, 23, 24, 25, 26, 27, 28, 29, 10],
            [21, 36, 35, 34, 33, 32, 31, 30, 11],
            [20, 19, 18, 17, 16, 15, 14, 13, 12],
        ],
        expected: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
        ],
        description: 'large wide matrix',
    },
    {
        input: [
            [1, 2, 3, 4],
            [22, 23, 24, 5],
            [21, 36, 25, 6],
            [20, 35, 26, 7],
            [19, 34, 27, 8],
            [18, 33, 28, 9],
            [17, 32, 29, 10],
            [16, 31, 30, 11],
            [15, 14, 13, 12],
        ],
        expected: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
        ],
        description: 'large tall matrix',
    },
];

const validate = ({ input, expected, description }) => {
    const userAnswer = walkMatrix(input);

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
