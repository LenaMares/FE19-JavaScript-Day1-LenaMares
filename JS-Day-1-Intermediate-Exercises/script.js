//Exercise 1

let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"]

console.log(cars.sort())


//Exercise 2

let fruits = ["apple", "banana", "kiwi"]
fruits.push("orange")
console.log(fruits)

let animals = ["monkey", "horse", "dog"]
let animals2 = animals.sort()
console.log(animals2)

animals2.unshift("cat")
console.log(animals2)

//Exercise 3

let fruitString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
let fruitsArray = fruitString.split("/")
let fruitsLines = fruitsArray.join("\n")
console.log(fruitsLines)



