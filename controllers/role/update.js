const db=require("../../DB/database")
const {Role}= db.models
const updateRole=async(req,res)=>{
try{
    let body=req.body
    const role = await Role.update ({
        roleName: body.roleName,
      },
      {
        where: { id: req.params.id },
      }
    )

    if(role==1){
        res.send({"msg":"Role updated successfully !"})
    }else{
        res.send({"msg":"Role is not found !"})

    }
  
    
    
}
catch(e){res.send({"msg":e})}




}
module.exports=updateRole