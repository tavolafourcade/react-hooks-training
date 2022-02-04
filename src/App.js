import React, { useState, memo, useCallback } from 'react'

const getRandomColor = () => '#' + Math.random().toString(16).slice(2,8)

const Button = memo(({callback, children}) => {

  const styles= {
    padding: '1em',
    fontSize: '20px',
    background: getRandomColor()
  }

  return (
    <button style={styles} onClick={callback}>
      { children }
    </button>
  )
  
})

const App = () => {
  const [ a, setA ] = useState(0)

  const incrementA = useCallback(() => {
    setA(a=> a + 1)
  }, [])

  return (
      <div>
        <Button callback={incrementA}>
          Increment A
        </Button>
        <h1>
          a:  { a }
        </h1>
      </div>
  )
}

export default App