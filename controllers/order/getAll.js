const db = require("../../DB/database")

const Books = require("../../models/book.model")();

const {Order}= db.models
const getAllOrders = async(req,res)=>{
  try{
   const orders = await Order.findAll(
   { include:[Books]}
   )
   res.json(orders);
  
  
  // else{
  //   const orders = await Order.findAll({
  //     where:{UserId:req.params.id}
  //   })
  //  res.json(orders);
   
  // }
}
  catch(e){res.send({"msg":e})}
}
  module.exports = getAllOrders