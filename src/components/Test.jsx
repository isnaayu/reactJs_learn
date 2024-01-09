import React from 'react'
import './css/style.css'

const Test = () => {
  const test = "Welcome"
  const obj = {
    key1: "key1",
    key2: "key2"
  }

  const style = {
    fontSize: '2em',
    color: 'blue',
  }

  function pembagian(a,b){
    return a/b
  }
  return (
    <div>
      <h1 style={{color: 'red'}}>{test}</h1>
      <h1 style={style}>{test}</h1>
      <h1 className='yellow'>{test}</h1>
      <h1>{pembagian(2,3)}</h1>
      <h1>{obj.key1}</h1>
    </div>
  )
}

export default Test
