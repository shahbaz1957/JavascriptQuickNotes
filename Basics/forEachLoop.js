/*
freecodecamp.org/news/javascript-foreach-js-array-for-each-example/

Syntax:
    array.forEach(function(element, index, array) {
        // Code to execute on each element
    });

    •	element: Current item in the array.
	•	index: (Optional) Index of the current element.
	•	array: (Optional) The entire array being iterated over.

    3.	Key Features:
	•	Non-blocking: Executes the callback function for every array element but does
        not return values.
	•	No break/continue: Unlike traditional for loops, you cannot break out of a 
        forEach loop. If you need to exit early, use a for loop or some/every.
	•	Modifies elements: Can modify the original array elements inside the loop.


    Note:
     Async/Await does not work with the forEach() array method but works with
     the for loop method.

*/


const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item ;
//   console.log(arr);
  
}


const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

 staffsDetails.forEach(function(val){
    
    if(val["salary"] == 3710){
        console.log("find")
        
    }
    else{
        console.log("not")
    }
 })

/////////////////////  Dot Vs []




    /*
    1. Dot Notation (.)

    Dot notation is used when the property name is a valid identifier, which means:

        •	The property name follows standard JavaScript variable naming rules.
        •	It doesn’t include any spaces or special characters (other than _ and $).
        •	The property name is known at the time of coding (i.e., it is not
            dynamically generated).
    */

   const person = {
       name: "John",
       age: 30
     };
     
     // Accessing property using dot notation
     console.log(person.name); // Output: "John"
     console.log(person.age);  // Output: 30


   /*
   2. Bracket Notation ([])

   Bracket notation is more flexible and allows you to:

	•	Access properties with names that are not valid JavaScript identifiers 
        (e.g., names with spaces or special characters).
	•	Dynamically access properties using variables or expressions.
	•	Property names can be passed as strings.
   */
    const person2 = {
        "first name": "John",
        age: 30,
        "favorite-color": "blue"
      };
      
      // Accessing properties using bracket notation
      console.log(person2["first name"]); // Output: "John"
      console.log(person2["favorite-color"]); // Output: "blue"
      
      // Dynamic property access using a variable
      const key = "age";
      console.log(person2[key]); // Output: 30


    /*

      Differences

	1.	Property Name Restrictions:
	•	Dot Notation: The property name must be a valid identifier (no spaces or 
        special characters).
	•	Bracket Notation: The property name can be any string, even if it contains 
        spaces or special characters.
    */

/////////////////// **** forEach Loop ****** ///////////////////



