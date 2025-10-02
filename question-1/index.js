const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject(new Error('Input must be an array'));
        }

        const lowerCased = mixedArray
            .filter(item => typeof item === 'string')
            .map(str => str.toLowerCase());
        
        if (lowerCased.length === 0) {
            return reject(new Error('No string elements found in the array'));
        }

        else resolve(lowerCased);
    });
}