const db = require('../DB/database');
const {User} = db.models;
const  verifyToken = async (req,res,next) => {
    // get auth header value
    // Format of token : authorization: Bearer <token>
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== "undefined") {
        // split at the space
        const bearer = bearerHeader.split(' ')
        // get token from array
        const token = bearer[1]
        // set the token
        req.token = token

        const user = await User.findOne({ where: { token: req.token } });
        if (user === null) {
            // Forbidden
        res.sendStatus(403)
        } else {
      // next middleware
        next()
         
        }


       
    } else {
        // Forbidden
        res.sendStatus(403)
    }

}

module.exports = verifyToken