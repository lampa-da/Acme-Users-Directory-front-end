const faker = require('faker')
let users = new Array(50).fill('').map(_ => faker.helpers.userCard())
console.log(users)

module.exports = {users}