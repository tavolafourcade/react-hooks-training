import React, { Component, useEffect, useState } from 'react'

const App = () => {
  const [ users, setUsers ] = useState([])
  const [ isFetching, setIsFetching ] = useState(true)


  useEffect(()=> {
    // We transform the API response to JSON
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      setUsers(users)
      setIsFetching(false)
    })
  },[])

  return (
    <div>
      {isFetching && <h1>Cargando...</h1>}
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