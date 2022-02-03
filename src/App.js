import React, { createContext, useState, useContext } from 'react'

// Consumir context de forma tradiciona
// const Nieto = () => (
//   <MyContext.Consumer>
//     {
//       (context) => (
//         <div>
//           <p>Nieto {context.num}</p>
//           <button onClick={context.addNum}>
//             Nieto Dispatcher
//           </button>
//         </div>
//       )
//     }
//   </MyContext.Consumer>
// )

// { Provider, Consumer }
const MyContext = createContext()

const Nieto = () => {
  const {num,addNum} = useContext(MyContext)
  return (
    <div>
      <p>
        Nieto {num}
      </p>
      <button onClick={addNum}>
        Nieto Dispatcher
      </button>
    </div>
  )
}

const Hijo = () => (
  <div>
    <p>Hijo</p>
    <Nieto />
  </div>
)

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