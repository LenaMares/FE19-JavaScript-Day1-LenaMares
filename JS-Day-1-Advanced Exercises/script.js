//Exercise 1

let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

let sum = a + b + parseInt(c) + parseInt(d) + e

console.log(sum)

let f = '1';

let g = 15;

let h = 8;

let i = "1";

let product = parseInt(f) * g * h * parseInt(1)

console.log(product)

let quotient = sum / product

console.log (quotient)


//Exercise 2

let people = ["Greg", "Mary", "Devon","James"]

people.shift()
console.log (people)

people.unshift("Matt")
console.log (people)

people.splice(3, 1)
console.log (people)

people.push("Lena")
console.log (people)

let peopleCopy = people.slice(2, 4)
console.log (peopleCopy)

let mary = people.indexOf("Mary")
console.log (mary)

let foo = people.indexOf("Foo")
console.log (foo)

people = ["Greg", "Mary", "Devon","James"]
console.log(people)

people.splice(2, 1, "Elisabeth", "Anna")
console.log(people)


//Exercise 3

myArray = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

newArray = [myArray[1][1], myArray[4][2], myArray[5][3], myArray[2][3], myArray[2][1]]

console.log (newArray)