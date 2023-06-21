import React, { useState } from 'react'

export default function Counter() {
  const [countData, setCountData] = useState(0);


  const handleClick = () => {
    setCountData(countData + 1);
  }

  const handleDecrement = () => {
    countData > 0 && setCountData(countData - 1)
  }


  return (
    <div data-test="appComponent">
      <h1 className=''>Count number is&nbsp;
        <span data-test='count'>{countData}</span>
      </h1>
      <div>
        <button data-test="button-data" onClick={handleClick} >Increment</button>&nbsp;
        <button data-test="button-decrement" onClick={handleDecrement} >Decrement</button>
      </div>
    </div>
  )
}
