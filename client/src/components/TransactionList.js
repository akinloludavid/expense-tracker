import React, {useContext, useEffect} from 'react';
import Transaction from './Transaction'
import {GlobalContext} from '../context/GlobalState'
const TransactionList = () => {
  const {transactions, getTransactions} = useContext(GlobalContext)
  useEffect(()=>{
    getTransactions()
    // eslint-disable-next-line 
  }, [])
  return ( 

    <div>
      <h3>History</h3>
      <ul className = "list"> 
        {transactions.map(trans=>{
          return(
            <Transaction key = {trans.id} trans ={trans}/>
          )
        })}
        <li>
          
        </li>
      </ul>
    </div>
   );
}
 
export default TransactionList;