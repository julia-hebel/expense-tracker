import React, { useContext } from 'react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import GlobalContext from '../contexts/GlobalState';

function Transaction({ transaction }) {
  const globalContext = useContext(GlobalContext);

  const [deleteButtonVisible, setDeleteButtonVisible] = useState(false);

  return (
    <li
      className={`relative flex justify-between bg-gray-700 my-2 py-1.5 px-4 rounded-sm border-r-4 ${
        transaction.amount < 0 ? 'border-red-600' : 'border-green-500'
      }`}
      onMouseEnter={() => setDeleteButtonVisible(true)}
      onMouseLeave={() => setDeleteButtonVisible(false)}
    >
      <div className='absolute top-1 -left-10 flex align-center h-10 w-10'>
        <div
          className={`${
            deleteButtonVisible ? 'visible' : 'invisible'
          } flex justify-center items-center h-8 w-8 cursor-pointer border-4 border-transparent bg-red-500 rounded-md`}
          onClick={() => {
            if (globalContext.balance - transaction.amount < 0) alert('You cannot do that!');
            else globalContext.deleteTransaction(transaction.id)
          }}
        >
          <FaTimes className='h-full' />
        </div>
      </div>
      <div>{transaction.title}</div>
      <div>
        {transaction.amount < 0 ? '-$' : '+$'}
        {Math.abs(transaction.amount).toFixed(2)}
      </div>
    </li>
  );
}

export default Transaction;
