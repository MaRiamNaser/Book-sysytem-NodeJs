const db = require("../../DB/database")
const {User}= db.models
const deleteUser=async(req,res)=>{
    try
    {
      const user=  await User.destroy(
            {where: { id: req.params.id }}
        )
        if(user){
            res.send({"msg":"User deleted successfully !"})
        }else{
            res.send({"msg":"User is not found !"})
    
        }  
    }
  
    catch(e){res.send({"msg":e})}
}
module.exports=deleteUser