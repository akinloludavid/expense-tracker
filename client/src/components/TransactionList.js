import React, {useContext, useEffect} from 'react';
import Transaction from './Transaction'
import {GlobalContext} from '../context/GlobalState'
const TransactionList = () => {
  const {transactions, getTransactions} = useContext(GlobalContext)
  useEffect(()=>{
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ( 

    <div>
      <h3>History</h3>
      <ul className = "list"> 
        {transactions.map(trans=>{
          return(
            <Transaction key = {trans._id} trans ={trans}/>
          )
        })}
        <li>
          
        </li>
      </ul>
    </div>
   );
}
 
export default TransactionList;