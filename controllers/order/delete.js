const db = require("../../DB/database")
const {Order} = db.models
const deleteOrder = async(req,res)=>{
    try
    {
      const order =  await Order.destroy(
            {where: { id: req.params.id }}
        )
        if(order){
            res.send({"msg":"Order deleted successfully !"})
        }else{
            res.send({"msg":"Order is not found !"})
    
        }  
    }
  
    catch(e){res.send({"msg":e})}
}
module.exports = deleteOrder