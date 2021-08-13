import React, { Fragment, useState } from 'react'

export const CountTwo = () => {
  let [count, setCount] = useState(0);

  return (
    <Fragment>
      {count}
      <button onClick={() => {setCount(++count)}}>+</button>
      <button onClick={() => {setCount(--count)}}>-</button>
    </Fragment>
  )
}
