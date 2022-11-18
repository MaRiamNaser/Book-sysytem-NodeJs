const db=require("../../DB/database")
const {Order} = db.models
const updateOrder = async(req,res)=>{
try{
    let body=req.body
    console.log(body);
    const user = await User.update ({
      userName: body.userName,
        email:body.email,
        password:body.password,
        isVerified:body.isVerified,
        RoleId:body.RoleId
      },
      {
        where: { id: req.params.id },
      }
    )

    if(user==1){
        res.send({"msg":"User updated successfully !"})
    }else{
        res.send({"msg":"User is not found !"})

    }
  
    
    
}
catch(e){res.send({"msg":e})}




}
module.exports=updateUser