const Transactions = require('../models/transactModel')

/** get transactions */
exports.getTransactions = async (req, res, next)=>{
  try{
    const currentUser = req.user
    const query = { accountOwner: currentUser._id  };
		const transactions = await Transactions.find(query)
    return res.status(200).json({
      data:transactions,
      count:transactions.length,
      success:true
    })
  }catch(err){
    return res.status(500).json({
      success:false, 
      error:err
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
  result.accountOwner = req.user._id
  await result.save()

  return res.status(201).json({
    success:true, 
    data:result
  })
}catch(err){
  return res.status(500).json({
    success: false,
    message:err.message,
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
    const currentUser = req.user
    const transaction = await Transactions.findById(req.params.id)
    if(!transaction){
      return res.status(404).json({
        success:false,
        error:'notfound'
      })
    }
    console.log(currentUser._id)
    if(transaction.accountOwner != currentUser._id){
      return res.status(403).json({
        success:false,
        message:"Unauthorized"
      })
    }
    await transaction.remove()
    return res.status(200).json({
      success:true, 
      message:'Transaction deleted'
    })
  }catch(err){
    return res.status(500).json({
      success: false,
      message:err.message,
      error: 'server error'
    })
  }
}

