import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
  const globalContext = useContext(GlobalContext);

  return (
    <div className='mt-8 text-lg'>
      <h1 className='pb-2 border-b border-gray-300 text-xl font-bold'>
        History
      </h1>
      <ul className='mt-3'>
        {globalContext.transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
