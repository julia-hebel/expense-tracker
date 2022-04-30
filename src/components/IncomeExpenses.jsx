import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalState';

function IncomeExpenses() {
  const globalContext = useContext(GlobalContext);

  const totalIncome = globalContext.amounts
    .filter((amount) => amount >= 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = Math.abs(
    globalContext.amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);

  return (
    <div className='m-auto mt-6 grid grid-cols-2 content-center h-24 text-center text-lg border border-gray-300 rounded-md'>
      <div className='flex flex-col items-center justify-center  rounded-lg'>
        <div>Income</div>
        <div className='text-green-400 font-bold'>+${totalIncome}</div>
      </div>
      <div className='flex flex-col items-center justify-center border-l border-gray-300 rounded-r-lg'>
        <h2>Expenses</h2>
        <h2 className='text-rose-600 font-bold'>-${totalExpenses}</h2>
      </div>
    </div>
  );
}

export default IncomeExpenses;
