const db=require("../../DB/database")
const {Role}= db.models

const getOneRole=async(req,res)=>{
   try{
        const role=  await Role.findOne(
    {
        where: { id: req.params.id }
     })
    
     if(role){
      res.send({"role":role})
  }else{
      res.send({"msg":"Role is not found !"})

  }
     }
     catch(e){res.send({"msg":e})}

}

  module.exports=getOneRole