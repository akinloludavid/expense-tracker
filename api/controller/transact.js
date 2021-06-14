const Transactions = require('../models/transact')

/** get transactions */
exports.getTransactions = async (req, res, next)=>{
  try{
    const transactions = await Transactions.find()
    return res.status(200).json({
      data:transactions,
      count:transactions.length,
      success:true
    })
  }catch(err){
    return res.status(500).json({
      success:false, 
      error:'server error'
    })
  }
}

/** add transactions
 * POST /api/transactions
 */
exports.addTransactions = async (req, res, next) => {
  try{
  const {text, amount} = req.body
  
  const result = await new Transactions(req.body)
  await result.save()

  return res.status(201).json({
    success:true, 
    data:result
  })
}catch(err){
  return res.status(500).json({
    success: false,
    error: 'server error'
  })
}
}

/** 
 * delete transactions
 * Delete /api/transactions/:id
 * */

exports.deleteTransactions =  async(req, res, next) => {
 
  try{
    const transaction = await Transactions.findByIdAndDelete(req.params.id)
    if(!transaction){
      return res.status(404).json({
        success:false,
        error:'notfound'
      })
    }
   
    return res.status(200).json({
      success:true, 
      message:'Transaction deleted'
    })
  }catch(err){
    return res.status(500).json({
      success: false,
      error: 'server error'
    })
  }
}

