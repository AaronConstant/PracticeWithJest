const subtract = require('../subtract') //Pulls from the js file that has the module.exports and runs test within it.

test('properly substracting two numbers', () => {
   expect( // takes anything and we expect it to do something related to the function 
   subtract(1,2)) // sets up the parameters 
    .toBe(-1) // where toBe means it is to equal this set amount and should expect it to equal other amounts as well. 
})