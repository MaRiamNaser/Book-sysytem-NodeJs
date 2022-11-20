const db = require("../../DB/database")
const {Category}= db.models
const postCategory = async(req,res)=>{

   try{
    let body = req.body;
    const category = await Category.create(body);
    if(category)
    {
     res.send({"msg":"Category Added successfully !"})
     }    
     else{
         res.send({"msg":"Something went wrong!"})
 
     }
}
    
  
   catch(e){res.send({"msg":e})}

}
module.exports = postCategory