const {users} = require('./generator')
const render = require('./renderer')

const userList = document.querySelector('#user-list')
let curr = window.location.hash.slice(1)*1

render({userList, users, curr})


window.addEventListener('hashchange', ()=>{
  curr = window.location.hash.slice(1)*1
  console.log(window.location.hash.slice(1)*1)
  render({userList, users, curr})
})