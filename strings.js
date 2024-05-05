const str = 'Hello, world!';
console.log(str.length); // Outputs: 13

console.log(str[0]); // Outputs: 'H'
console.log(str.charAt(1)); // Outputs: 'e'

console.log(str.substring(0, 5)); // Outputs: 'Hello'

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat(', ', str2, '!')); // Outputs: 'Hello, world!'

console.log(str.indexOf('world')); // Outputs: 7
console.log(str.lastIndexOf('o')); // Outputs: 8
console.log(str.includes('lo')); // Outputs: true


console.log(str.toUpperCase()); // Outputs: 'HELLO, WORLD!'
console.log(str.toLowerCase()); // Outputs: 'hello, world!'


console.log(str.trim());

const str3 = 'apple, banana, orange';
console.log(str3.split(', ')); // Outputs: ['apple', 'banana', 'orange']
