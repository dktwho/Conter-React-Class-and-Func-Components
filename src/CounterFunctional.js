import React, {useState} from 'react'

const CounterFunctional = () => {
  const [count, setCount] = useState(0)

const incr = () => {
  setCount(count => count + 1)
}

const decr = () => {
  setCount(count => count - 1)
}

  return (
    <div className='counterFunc'>
      <h2 className='description'>Counter based on Funct Components</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={incr}>incr</button>
        <button className='btn' onClick={decr}>decr</button>
        <button className='btn' onClick={()=> setCount(0)}>reset</button>


    </div>
  )
}

export default CounterFunctional
