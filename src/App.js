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
  const [ b, setB ] = useState(0)


  const incrementA = useCallback(() => {
    setA(a=> a + 1)
  }, [])

  const incrementB = useCallback(() => {
    setB(b=> b + a)
  }, [a])

  return (
      <div>
        <Button callback={incrementA}>
          Increment A
        </Button>
        <Button callback={incrementB}>
          Increment B
        </Button>
        <h1>
          a:  { a } b: { b }
        </h1>
      </div>
  )
}

export default App