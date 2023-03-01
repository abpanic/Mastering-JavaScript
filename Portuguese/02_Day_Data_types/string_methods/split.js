// split(): The split method splits a string at a specified place.
let string = 'Masterings Of JavaScript'
console.log(string.split())     // ["Masterings Of JavaScript"]
console.log(string.split(' '))  // ["30", "Lessons", "Of", "JavaScript"]
let firstName = 'Abhilash'
console.log(firstName.split())  // ["Abhilash"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'India, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["India", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["India", "Sweden", "Norway", "Denmark", "and Iceland"]