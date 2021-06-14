import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

const Transaction = ({trans})=>{
  const {deleteTransaction} = useContext(GlobalContext)
  const {text,amount,_id} = trans
  const changeAmountSign = (amt)=>{
    if (amt< 0){
      return `-$${Math.abs(amt)}`
    }
    return `$${Math.abs(amt)}`
  }
  return (
    <div className = "list" >
      <li className = {amount < 0 ? 'minus' : 'plus'}>

      {text} <span>{changeAmountSign(amount)}</span>
      <button onClick ={()=>deleteTransaction(_id)} className = "delete-btn">x</button>
      </li>

    </div>
  )
}

export default Transaction