import React, { Component, useEffect, useState } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const App = () => {
  const [ mouseX, setMouseX ] = useState(0)
  const [ mouseY, setMouseY ] = useState(0)


  const handleMove = (e) => {
    // Storing the coursor coordenates
    setMouseX(e.clientX)
    setMouseY(e.clientY)

  }
  useEffect(()=> {
    window.addEventListener('mouseover', handleMove)

    return () => {
      window.removeEventListener('mouseover', handleMove)

    }
  })

  return (
    <div>
      <Header/>
      <h1>X: {mouseX}, Y: {mouseY}</h1>
    </div>
  )
}

export default App