const db=require("../../DB/database")
const {User}= db.models

const getUserAll=async(req,res)=>{
  try{
   const users = await User.findAll()
   res.json(users);
  
  }
  catch(e){res.send({"msg":e})}

 
}
  module.exports=getUserAll