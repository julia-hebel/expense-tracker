import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalContextProvider } from './contexts/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <div className='flex justify-center py-6 bg-gray-900 text-white'>
        <div className='w-9/12 p-5 pb-10 border border-gray-300 rounded-lg'>
          <Header />
          <div className='mt-10 m-auto w-10/12'>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
