import React, { useState } from 'react'

const Counter = ({ count }) => {
  console.log('%cRender <Counter />', 'color:blue');
  return (
    <h1>
      { count }
    </h1>
  )
}

const Title = ({ text }) => {
  console.log('%cRender <Title />', 'color:orangered');
  return (
    <h1>
      { text }
    </h1>
  )
}

const App = () => {
  const [ title, setTitle ] = useState('')
  const [ count, setCount ] = useState(0)

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
      <div>
        <input 
          type='text'
          onChange={handleInput}
          />
          <button onClick={handleAdd}>
            Add
          </button>
          <Counter count={count}/>
          <Title text={title} />
      </div>
  )
}

export default App