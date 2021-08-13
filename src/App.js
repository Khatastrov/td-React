import React, { Fragment, useState } from 'react';
import Pouet from './Pouet';

const App = () => {
  
  const [shouldAppear, setshouldAppear] = useState(false);
  const el = shouldAppear ? <Pouet /> : <div>Nope.</div>

    return (
      <Fragment>
        <button onClick={() => {setshouldAppear(!shouldAppear)}}>Toggle</button>
        {el}
      </Fragment>
    )
}

export default App;
