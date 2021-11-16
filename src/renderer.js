let render = ({userList, users, curr})=>{
  
  const html = `
    ${ users.map((user,idx) => `
    <li>
      <a href='#${idx}'>${user.username}</a>
      ${
        curr === idx ? 
        `<ul>
          <li>${user.email}</li>
        </ul>` : ''
      }
    </li>
    `).join('')}
    `
    userList.innerHTML = html
    
}

module.exports = render