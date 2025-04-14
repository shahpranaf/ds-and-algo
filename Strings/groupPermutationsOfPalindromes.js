/**
 * @param {List[str]} strings
 * @return {List[List[str]]}
 */
const isOdd = (num) => num % 2 !== 0;

const isPalindrome = (string) => {
    const charachterCountTable = {};

    for (let i = 0; i < string.length; i++) {
        charachterCountTable[string[i]] = (charachterCountTable[string[i]] || 0) + 1;
    }

    let oddCharCount = 0;
    Object.values(charachterCountTable).forEach((val) => {
        if (isOdd(val)) {
            oddCharCount++;
        }
    })

    return oddCharCount <= 1;
}

function groupPermutationsOfPalindromes(strings) {
    // Your solution here
    const hashLookup = {};

    for (let i = 0; i < strings.length; i++) {
        const sortedStr = strings[i].split('').sort().join('');
        if (!hashLookup.hasOwnProperty(sortedStr)) {
            if (isPalindrome(strings[i])) {
                hashLookup[sortedStr] = [strings[i]]
            }
        } else {
            hashLookup[sortedStr].push(strings[i])
        }
    }

    return Object.values(hashLookup);
};

const strings = ['racecar', 'acerrac', 'aaccerr', 'naa', 'aan', 'todo', 'doto', 'code', 'bob'];

console.log(groupPermutationsOfPalindromes(strings))

const tests = [
    {
        input: [],
        expected: [],
        description: 'empty input',
    },
    {
        input: ['racecar', 'acerrac', 'aaccerr', 'naa', 'aan', 'bob'],
        expected: [['aaccerr', 'acerrac', 'racecar'], ['aan', 'naa'], ['bob']],
        description: 'input only palindromes',
    },
    {
        input: ['racecar', 'naa', 'obb'],
        expected: [['racecar'], ['naa'], ['obb']],
        description: 'input single item groups',
    },
    {
        input: ['racecar', 'acerrac', 'aaccerr', 'naa', 'aan', 'todo', 'doto', 'code', 'bob'],
        expected: [['aaccerr', 'acerrac', 'racecar'], ['aan', 'naa'], ['bob']],
        description: 'input palindromes and non-palindromes',
    },
];

const sortOutputArray = (a, b) => a[0][0] - b[0][0];

const validate = ({ input, expected, description }) => {
    const userAnswer = groupPermutationsOfPalindromes(input);

    if (userAnswer.length !== expected.length) {
        return { passed: false, description, expected, userAnswer };
    }

    if (userAnswer.length === 0 && expected.length === 0) {
        return { passed: true, description, expected, userAnswer };
    }

    const sortedUserAnswer = userAnswer.map(item => item.sort()).sort(sortOutputArray);
    let passed = true;

    for (let i = 0; i < sortedUserAnswer.length; i++) {
        const uai = sortedUserAnswer[i];
        const eai = expected[i];

        for (let j = 0; j < uai.length; j++) {
            if (uai[j] !== eai[j]) {
                passed = false;
            }
        }
    }

    return { passed, description, expected, userAnswer };
};


tests.forEach(test => console.log(validate({input: test.input, expected: test.expected, description: test.description})))
