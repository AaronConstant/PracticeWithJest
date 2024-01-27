const cloningArray = require('../cloningArray')

test('properly clones array', () => { //signifies that it is to equal an array or proper clone of array
    const array = [1, 2, 3] //an array to reference for the test.
    expect(cloningArray(array)).toEqual(array) //instead of toBe we are using toEqual to compare memory addresses. The original array is a different array since both arrays have the same structure though not same memroy address.
    expect(cloningArray(array)).not.toBe(array) // This references that it is not the same array but a clone of that array for this instance. 
})