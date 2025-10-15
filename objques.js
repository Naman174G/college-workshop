//1. Destructure Nested Object
const user = { 
    name: "Alice", 
    details: { age: 25, city: "Paris" }
};

// getting age and city from nested object
let { details: { age, city } } = user;

console.log(age, city);



//2. Merge Objects
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }


let merged = { ...obj1, ...obj2 }

console.log(merged)




//3. Convert Object to Array
const product = { id: 1, name: "Laptop", price: 1000 }


let arr = Object.entries(product)

console.log(arr)




//4. Update Nested Value Without Mutation
const person = { name: "John", address: { city: "London", zip: 12345 } }

let newPerson = { 
    ...person, 
    address: { ...person.address, city: "Tokyo" }
}

console.log(newPerson)




//5. Filter Object Keys by Condition

const scores = { Alice: 85, Bob: 58, Charlie: 90, Dave: 45 }


let passed = {}

for(let key in scores){
    if(scores[key] >= 60){
        passed[key] = scores[key]
    }
}

console.log(passed)