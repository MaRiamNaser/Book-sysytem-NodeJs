const db=require("../../DB/database")
const {OrderBook} = db.models
const updateOrder = async(req,res)=>{
try{
    let body = req.body
    const order = await Order.find(
      {
        where: { OrderId: req.param.id },
      }
    )
 
    if(order){
      order.removeOrderBooks([orderBooks])
      order.setOrderBooks(body)

        res.send({"msg":"Order updated successfully !"})
    }else{
        res.send({"msg":"Order is not found !"})

    }
  
    
    
}
catch(e){res.send({"msg":e})}




}
module.exports=updateOrder