const db=require("../../DB/database")
const {Order}= db.models

const getOneOrder=async(req,res)=>{
   try{
        const order=  await Order.findAll(
    {
        where: { UserId: req.params.id }
     })
    
     if(order){
      res.send({"Order":order})
  }else{
      res.send({"msg":"Order is not found !"})

  }
     }
     catch(e){res.send({"msg":e})}

}

  module.exports=getOneOrder