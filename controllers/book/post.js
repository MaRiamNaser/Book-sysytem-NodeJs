const db=require("../../DB/database")
const {Book}= db.models
const postBook = async(req,res)=>{

   try{
    let body = req.body;
    const book = await Book.create(body);
    if(book)
    {
     res.send({"msg":"Order Added successfully !"})
     }    
     else{
         res.send({"msg":"Something went wrong!"})
 
     }
}
    
  
   catch(e){res.send({"msg":e})}

}
module.exports=postOrder