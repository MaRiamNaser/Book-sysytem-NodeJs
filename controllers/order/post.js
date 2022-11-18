const db=require("../../DB/database")
const {Order}= db.models
const postOrder = async(req,res)=>{

   try{
    let body = req.body
   
    const order = await Order.create(body);
    if(order)
    {
     res.send({"msg":"Order Added successfully !"})
     }    
     else{
         res.send({"msg":"Something went wrong!"})
 
     }
}
    
  
   catch(e){res.send({"msg":e})}

}
module.exports=postOrder