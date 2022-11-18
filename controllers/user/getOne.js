const db=require("../../DB/database")
const {User}= db.models

const getOneUser=async(req,res)=>{
   try{
        const user=  await User.findOne(
    {
        where: { id: req.params.id }
     })
    
     if(user){
      res.send({"user":user})
  }else{
      res.send({"msg":"User is not found !"})

  }
     }
     catch(e){res.send({"msg":e})}

}

  module.exports=getOneUser