import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      title: 'Food',
      amount: -20,
    },
    {
      id: 2,
      title: 'Salary',
      amount: 600,
    },
    {
      id: 3,
      title: 'Book',
      amount: -10,
    },
    {
      id: 4,
      title: 'From dad',
      amount: 40,
    },
  ],
};

// Create global context
const GlobalContext = createContext();

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}

// Provider component
export function GlobalContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  }

  const amounts = state.transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const value = {
    transactions: state.transactions,
    amounts: amounts,
    balance: balance,
    deleteTransaction: deleteTransaction,
    addTransaction: addTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
