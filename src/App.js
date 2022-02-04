import React, { useState, memo } from 'react'

// React.memo()
const Counter = memo(({ count }) => {
  console.log('%cRender <Counter />', 'color:blue');
  return (
    <h1>
      { count }
    </h1>
  )
})

const Title = memo(({ text }) => {
  console.log('%cRender <Title />', 'color:orangered');
  return (
    <h1>
      { text }
    </h1>
  )
})

const TitleNested = memo(({ info }) => {
  console.log('%cRender <TitleNested />', 'color:purple');
  return (
    <h1>
      { info.text }
    </h1>
  )
},
  // Algoritmo de diferenciación
  (prevProps, nextProps)=> {
    //console.log(prevProps, nextProps);
    // Si retorna true no se va a renderizar: cuando text es igual
    // Si retorna false se va a renderizar: cuando text cambió
    return prevProps.info.text === nextProps.info.text
  }
)

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
          <TitleNested info={{
            text: title
          }} />
      </div>
  )
}

export default App