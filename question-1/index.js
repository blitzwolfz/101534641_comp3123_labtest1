const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
            return;
        }
        
        // Filter only strings and convert to lowercase
        const result = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());
        
        if (result.length === 0) {
            reject("No strings found in the array");
        } else {
            resolve(result);
        }
    });
};
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// const lowerCaseWords = (mixedArray) 
//                     => 
//                         new Promise((resolve, reject) 
//                         => 
//                             !Array.isArray(mixedArray) 
//                             ? reject(new Error('Input must be an array')) 
//                             : ((words) => words.length ? resolve(words) 
//                             : reject(new Error('No string elements found in the array')))(mixedArray.filter(item => typeof item === 'string').map(str => str.toLowerCase()))));