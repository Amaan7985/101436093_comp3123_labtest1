// Name: Mohammad Amaan Vohra
// Student Id: 101436093

// QUESTION 2 : Promises

// ANSWER:
const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500);
}
const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
}
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
}
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({'error': 'delayed exception!'});
        }, 500);
    });
}
resolvedPromise()
    .then(outcome => console.log(outcome))
    .catch(error => console.error(error));
rejectedPromise()
    .then(outcome => console.log(outcome))
    .catch(error => console.error(error));
delayedSuccess();
delayedException();
