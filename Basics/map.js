
/// MAP

/*
    The key feature of the Map method is that it creates a new array based on 
    the results of applying this callback function to each element of the 
    original array, without modifying the original array itself.

    Syntax
        array.map(function(currentValue, index, arr), thisValue)

        Parameter ->	Description
        function()	- Required.
        A function to be run for each array element.

        currentValue -	Required.
        The value of the current element.

        index -	Optional.
        The index of the current element.

        arr	 - Optional.
        The array of the current element.

        thisValue	- Optional.
        Default value undefined.

        A value passed to the function to be used as its this value.
        Return Value
        Type	Description
        An array	The results of a function for each array element.
 */

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (num) {
    num * 3;
});
console.log(doubledNumbers.map(val => val))
//[ undefined, undefined, undefined, undefined, undefined ]
/// if not return give undefined


const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers2 = numbers.map(function (num) {
    return num * 5;
});
// console.log(doubledNumbers2.map(val => val))
//[ 5, 10, 15, 20, 25 ]


const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];
const userIds = users.map(user => user.id);
// userIds: [1, 2, 3]


const names = ['John', 'Jane', 'Doe'];
const uppercasedNames = names.map(name => name.toUpperCase());
// uppercasedNames: ['JOHN', 'JANE', 'DOE']  


const numbers3 = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers3.map((num, index) => num + index);
// incrementedNumbers: [1, 3, 5, 7, 9]