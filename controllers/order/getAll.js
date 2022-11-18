const db=require("../../DB/database")
const {Order}= db.models
const getOrderAll=async(req,res)=>{
  try{
   const orders = await Order.findAll()
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
  module.exports=getOrderAll