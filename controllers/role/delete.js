const db=require("../../DB/database")
const {Role}= db.models
const deleteRole=async(req,res)=>{
    try
    {
      const role=  await Role.destroy(
            {where: { id: req.params.id }}
        )
        if(role){
            res.send({"msg":"Role deleted successfully !"})
        }else{
            res.send({"msg":"Role is not found !"})
    
        }  
    }
  
    catch(e){res.send({"msg":e})}
}
module.exports=deleteRole