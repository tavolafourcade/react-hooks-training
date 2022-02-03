import React, { Component, useEffect, useState, useLayoutEffect } from 'react'

const App = () => {
  const [ count, setCount ] = useState(0)

  useEffect(()=> {
    console.log('useEffect1');
  },[count])

  useEffect(()=> {
    console.log('useEffect2');
  },[count])

  useLayoutEffect(()=> {
    console.log('useLayoutEffect 1');
  },[count])

  useLayoutEffect(()=> {
    console.log('useLayoutEffect 2');
  },[count])

  const add = () => setCount(count+1)
  return (
    <div>
    </div>
  )
}

export default App