const db=require("../../DB/database")
const {Role}= db.models

const getRoleAll = async(req,res)=>{
  try{
   const roles = await Role.findAll()
   res.json(roles);
  
  }
  catch(e){res.send({"msg":e})}
}
  module.exports=getRoleAll