import React, {Fragment, useState, useEffect} from 'react'

export const CountOne = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} bouteille(s) de bière`;
  });

  return (
    <Fragment>
      {count} 
      <button onClick={() => {setCount(++count)}}>+</button>
      <button onClick={() => {setCount(--count)}}>-</button>
    </Fragment>
  )
}
