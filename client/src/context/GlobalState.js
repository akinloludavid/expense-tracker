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
  const token = localStorage.getItem('token')
  const config = {
    headers:{
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' +token
    }
  }
  async function getTransactions(){
    try{
      const res = await axios.get('/api/expense-tracker', config)
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
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/expense-tracker/${id}`, config)
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
    
  }

  async function addTransaction(transaction){
    try {
     
      const res = await axios.post('/api/expense-tracker', transaction, config)
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
    
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