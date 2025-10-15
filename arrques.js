//1. Remove Duplicates
const arr = [1, 2, 2, 3, 4, 4, 5]


let unique = [...new Set(arr)]

console.log(unique)



//2. Flatten Nested Array
const arr1 = [1, [2, [3, [4, 5]]]]


let flatArr = arr.flat(Infinity)

console.log(flatArr)




//3. Sort Objects by Property
const users1 = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 }
]


users.sort((a,b) => a.age - b.age)

console.log(users)




//4. Group Elements by Property
const people = [
    { name: "Tom", gender: "male" },
    { name: "Sara", gender: "female" },
    { name: "Alex", gender: "male" }
]


let grouped = { male: [], female: [] }

for(let p of people){
    grouped[p.gender].push(p)
}

console.log(grouped)




//5. Transform Array of Objects
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
]

let result = {}

for(let u of users){
    result[u.id] = u.name
}

console.log(result)