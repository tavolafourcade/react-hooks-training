import React, { Component, useEffect, useState } from 'react'

const App = () => {
  const [ users, setUsers ] = useState([])

  useEffect(()=> {
    // We transform the API response to JSON
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setUsers(users))
  },[])


  return (
    <div>
      <ul>
        { users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App