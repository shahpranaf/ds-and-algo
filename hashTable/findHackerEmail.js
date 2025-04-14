/**
 * @param {List[str]} emails
 * @return {str}
 */
const findHackerEmail = (emails) => {
    // Your solution here
    const emailObj = {};
    let maxIndex;
    let maxCount = 0;

    for (let i = 0; i < emails.length; i++) {
        emailObj[emails[i]] = (emailObj[emails[i]] ?? 0)+ 1;
        if (emailObj[emails[i]] > maxCount) {
            maxCount = emailObj[emails[i]];
            maxIndex = i;
        }
    }
    return emails[maxIndex];
};

const emails = ['a@gmail.com', 'hey@skilled.dev', 'b@yahoo.com', 'hey@skilled.dev'];

console.log(findHackerEmail(emails))
