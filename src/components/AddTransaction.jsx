import React, { useState, useContext } from 'react';
import GlobalContext from '../contexts/GlobalState';

function AddTransaction() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const globalContext = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();

    if (!title || !amount) {
      alert('Please fill the transaction');
      return;
    }

    if (Number(globalContext.balance) + amount < 0) {
      alert('Not enough balance!');
      return;
    }

    const id = Number(globalContext.transactions[globalContext.transactions.length - 1].id) + 1;
    const newTransaction = { id, title, amount };

    globalContext.addTransaction(newTransaction);
    setTitle('');
    setAmount('');
  }

  return (
    <div className='mt-8'>
      <h3 className='text-xl font-bold pb-2 border-b'>Add a new transaction</h3>
      <form className='mt-4' onSubmit={onSubmit}>
        <div className=''>
          <label className='text-xl mb-1 inline-block'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter title'
            className='text-black rounded-md p-2 w-full'
          />
        </div>
        <div className='mt-4'>
          <label className='text-xl mb-1 inline-block'>Amount (USD)</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder='Enter amount'
            className='text-black rounded-md p-2 w-full'
          />
        </div>
        <input
          type='submit'
          value='Add'
          className='w-full h-10 bg-green-600 rounded-md mt-8 cursor-pointer'
        />
      </form>
    </div>
  );
}

export default AddTransaction;
