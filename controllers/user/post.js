const bodyParser = require("body-parser")
const db=require("../../DB/database")
const isEmailValid=require("./emailVerfied")
var validator = require("email-validator");
const {User}= db.models
const postUser=async(req,res)=>{

   try{
    let body= req.body
    const {email,password} = body
    if (!email || !password){
         res.status(400).send({
            msg: "Email or password missing."
        })
      }
    const valid =await  validator.validate(email);
    console.log(valid);
    if (valid)
     {
    const user= await User.create(body);
    if(user)
    {
     res.send({"msg":"User Added successfully !"})
     }    
     else{
         res.send({"msg":"Something went wrong!"})
 
     }



}
    
    else {res.status(400).send({
        msg: "Please provide a valid email address.",
        reason: validators[reason].reason,
    "isvalid":valid}
      )}
  
   }
   catch(e){res.send({"msg":e})}

}
module.exports=postUser