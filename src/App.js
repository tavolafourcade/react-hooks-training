import React, { createContext, useState } from 'react'

const Nieto = () => (
  <MyContext.Consumer>
    {
      (context) => (
        <div>
          <p>Nieto {context.num}</p>
          <button onClick={context.addNum}>
            Nieto Dispatcher
          </button>
        </div>
      )
    }
  </MyContext.Consumer>
)

const Hijo = () => (
  <div>
    <p>Hijo</p>
    <Nieto />
  </div>
)

// { Provider, Consumer }
const MyContext = createContext()

const App = () => {
  const [ num, setNum ] = useState(0)
  const addNum = () => setNum(num+1)
  return (
    <MyContext.Provider value={{
      num,
      addNum
    }}>
      <div>
        <button onClick={addNum}>
          App ( {num})
        </button>
        <Hijo/>
      </div>
    </MyContext.Provider>
  )
}

export default App