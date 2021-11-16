const {users} = require('./generator')

users = JSON.parse(window.localStorage.getItem('users'))

if(!users){
  users
  window.localStorage.setItem('users', JSON.stringify(users))
}