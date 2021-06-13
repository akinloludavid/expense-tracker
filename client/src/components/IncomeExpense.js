import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
 const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  if(!transactions.length){
    return <h3>Add new stuff</h3>
  }
  const income = transactions.filter(trans => trans.amount>0)
              .map(trans => trans.amount)
  const totalIncome = income.reduce((acc,curr)=> acc+=curr,0).toFixed(2)
  const expense = transactions.filter(trans => trans.amount<0).map(trans => trans.amount)

  const totalExpense =  expense.reduce((acc, curr) => acc += curr,0).toFixed(2)

  const changeAmountSign = (amt) => {
    if (amt < 0) {
      return `-$${Math.abs(amt)}`
    }
    return `$${Math.abs(amt)}`
  }
  return (
    <div className = "inc-exp-container" >
      <div>
        <h4>Income</h4>
        <p className = "money plus">{changeAmountSign(totalIncome)}</p>
      </div>
      <div>
        <h4>Expense </h4>
        <p className = "money minus">{changeAmountSign(totalExpense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpense