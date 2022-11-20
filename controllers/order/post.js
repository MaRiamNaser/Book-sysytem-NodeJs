const db = require("../../DB/database")

const {Order} = db.models;
const {Book} = db.models;
const postOrder = async(req,res)=>{

const body=req.body
const order = await Order.create(body);
// console.log("order",order);
// const book = await Book.create({ title: 'Queen', path:"1234", ispn:"12345" });
// console.log(book.id );
try {
   
   let orderBook = await order.setBooks(req.body.BookId);
   res.send(orderBook);
} catch (error) {
   res.send(error)
}
// const result = await Order.findOne({
//   where: { UserId: req.body.UserId },
//   include: Book
// });
// res.send(result)

/*
   try{
    let body = req.body
    const order = await Order.create(body);
   await order.addBooks(body.BookId)
    if(order)
    {
     res.send({"msg":"Order Added successfully !"})
     }    
     else{
         res.send({"msg":"Something went wrong!"})
     }

}
   catch(e){res.send({"msg":e})}
*/
}
module.exports=postOrder

