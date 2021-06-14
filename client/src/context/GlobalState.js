import React, {createContext, useReducer}from 'react';
import axios from 'axios'
import {AppReducer} from './AppReducer'
const initialState = {
  transactions: [], 
  error:null,
  loading:false
}

export const GlobalContext = createContext(initialState)

const GlobalContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(AppReducer, initialState)
  async function getTransactions(){
    try{
      const res = await axios.get('/api/expense-tracker')
      dispatch({
        type:'GET_TRANSACTIONS',
        payload:res.data.data
      })
    }catch(err){
        dispatch({
          type:'TRANSACTION_ERROR', 
          payload:err.response.data.error
        })
    }
  }
  function deleteTransaction(id) {
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    })
  }
  return (
    <GlobalContext.Provider value ={{
      transactions:state.transactions,
      deleteTransaction, addTransaction, 
      error:state.error, loading:state.loading, getTransactions
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;