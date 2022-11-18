
const emailValidator = require('deep-email-validator');

const isEmailValid=async (email)=> {
 const validate= await emailValidator.validate(email)
 return validate
}
module.exports=isEmailValid