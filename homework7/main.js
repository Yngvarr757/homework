const info = {
    name: 'Igor',
    age: 18,
    hello(name){
        return `Hello ${name}`
    }
}

const users = [
    {
        name: 'Igor',
        age: 18,
        isAdmin: false
    },
    {
        name: 'Vlad',
        age: 28,
        isAdmin: false
    },
    {
        name: 'Pudge',
        age: 66,
        isAdmin: true
    },
    {
        name: 'Andrey',
        age: 42,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
]
let simpleUsers = 0

for(let i = 0; i < users.length; i++){
    if(users[i].isAdmin === false){
        simpleUsers ++
    }
}
console.log(`Количество простых пользователей: ${simpleUsers}`)
