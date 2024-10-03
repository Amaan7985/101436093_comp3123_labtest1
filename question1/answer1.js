// Name: Mohammad Amaan Vohra
// Student Id: 101436093

// QUESTION 1 : ES6 Features

// ANSWER:
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input must be an array');
        }
        const outcome = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());
            resolve(outcome);
    });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(outcome => console.log(outcome))  
    .catch(error => console.log(error));
