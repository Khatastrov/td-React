import React, {useEffect, useState} from 'react';

const Pouet = () => {
  const [countOne, setCountOne] = useState(10);
  const [countTwo, setCountTwo] = useState(0);


  useEffect(() => {
    // on component mount & only if countOne is modified
    document.title = `${countOne} bouteille(s) de bière`;
  }, [countOne]);

  useEffect(() => {
    // on component mount
    console.log("Ah! Création B) ");
    return () => {
      // on component unmount
      console.log("Mah... destruction ! ._.");
    }
  }, [])
  
  return (
    <div>
      POuet mothafucka.
      <section>
        <div>
          {countOne}
          <button onClick={() => { setCountOne(countOne +1) }}>+</button>
          <button onClick={() => { setCountOne(countOne > 1 ? countOne-1 : 1) }}>-</button>
          {countOne <= 1 ? <p>(Une bière c'est le minimum syndical.)</p> : null}
        </div>
        <div>
          {countTwo}
          <button onClick={() => { setCountTwo(countTwo+1) }}>+</button>
          <button onClick={() => { setCountTwo(countTwo-1) }}>-</button>
        </div>
      </section>
    </div>
  )
}

export default Pouet
