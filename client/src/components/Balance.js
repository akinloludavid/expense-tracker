import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const total = transactions.map(trans =>trans.amount)
                            .reduce((acc, curr) => (acc+=curr), 0).toFixed(2)

  return ( 
    <div>
      <h4>Your balance</h4>
      <h1>${total}</h1>
    </div>
   );
}
 
export default Balance;