const sum = require('../sum')

test('properly adds two numbers', () => {
   expect( // takes anything and we expect it to do something related to the function 
    sum(1,2)) // sets up the parameters 
    .toBe(3) // where toBe means it is to equal this set amount and should expect it to equal other amounts as well. 
})