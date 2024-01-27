const cloningArray = (array) => {
    return [...array]
}

module.exports = cloningArray

// Side Notes: 

 // Within the test portion of the package.json, 
 // adding --coverage makes a note of every line that is ran or function and tests to make sure all tests are run 100%
 // if any where within the code that a function is not reaching 100% it will designate where.
 // Once you add --coverage, it will create a seperate panel, click on it and open the index.html file to see and what is not being run.
 