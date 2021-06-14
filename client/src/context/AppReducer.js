export  const AppReducer = (state, action)=>{
  switch(action.type){
    case 'GET_TRANSACTION':
      return {
        ...state,
        transactions:action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state, 
        transactions:state.transactions.filter(tran => tran.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state, transactions: [...state.transactions, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state, 
        error:action.payload
      }
    default:
      return state
  }
}