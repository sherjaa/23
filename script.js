// var people = ["Greg", "Mary", "Devon", "James"] massivi berilgan
// 1. "Greg" ni massivdan olib tashlang
// 2. "James" ni  massivdan olib tashlang
// 3. "Matt" ni massivning boshiga qo'shing
// 4. O'z ismingizni massiv oxiriga qo'shing
// 5. slice() orqali massivdan nusxa oling, nusxada yo "Mary", yo "Matt" ismi bo'lmasligi kerak
// 6. splice() orqali massivdan "Devon" ni olib tashlang va uning o'rniga "Elizabeth" va "Artie" ni qo'shing

var people = ["Greg", "Mary", "Devon", "James"]

console.log(people)

people.shift()

console.log(people)

people.pop()

console.log(people)

people.unshift('Matt')

console.log(people)

people.push('Sherdjakhon')

console.log(people)

people.splice(0, 2)

console.log(people)

people.splice(0, 1)

console.log(people)

people.unshift("Elizabeth", "Artie")

console.log(people)
