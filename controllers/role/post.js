const db=require("../../DB/database")
const {Role}= db.models
const postRole = async(req,res)=>{

   try{
    let body= req.body
   const role= await Role.create(body);
   if(role)
   {
    res.send({"msg":"Role Added successfully !"})
    }    
    else{
        res.send({"msg":"Something went wrong!"})

    }
   }
   catch(e){res.send({"msg":e})}

}
module.exports=postRole