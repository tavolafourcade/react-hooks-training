import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const [ name, setName ] = useState('')
  const [ products, setProducts ] = useState([])

  const entrada = useRef()

  useEffect(() => {
    // Products request
    fetch('https://universidad-react-api-test.luxfenix.vercel.app/products?name=' + name)
    .then(res => res.json())
    .then(data => setProducts(data.products))
  },[name])

  const handleInput = (e) => {
    setName(e.target.value)
  }
  return (
      <div>
        <input 
          type='text'
          onChange={handleInput}
          ref={entrada}
          />
          <ul>
            {products.map( product => (
              <li key={product.id}>
                {product.name}
              </li>
            ))}
          </ul>
      </div>
  )
}

export default App