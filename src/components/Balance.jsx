import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalState';

function Balance() {
  const globalContext = useContext(GlobalContext);

  const totalBalance = globalContext.amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className=''>
      <h4 className='text-lg'>Your balance</h4>
      <h1 className='font-bold text-3xl'>${totalBalance}</h1>
    </div>
  );
}

export default Balance;
