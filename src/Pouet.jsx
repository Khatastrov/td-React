import React, {useEffect, useState} from 'react';

const Pouet = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);


  useEffect(() => {
    document.title = `${countOne} bouteille(s) de bière`;
  }, [countOne]);

  useEffect(() => {
    //everything here is rendered on component mount
    console.log("Ah! Création B) ");
    return () => {
      //everything here is rendered on component unmount
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
          <button onClick={() => { setCountOne(countOne-1) }}>-</button>
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
