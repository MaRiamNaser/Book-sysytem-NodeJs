const db = require('../DB/database');
const {User,Role} = db.models;
const  isSuperAdmin = async (req,res,next) => {
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
        if(user){
            console.log("**********************************");
            const role = await Role.findOne({where:{id:user.RoleId}})
            console.log(role);
            if (role.roleName != "super admin") {
                // Forbidden
            res.status(401).send({"msg": "unauthorized !"})
            } else {
               // next middleware
            next()
            }
        }else{
            res.status(401).send({"msg": "unauthorized !"})
        }
    } else {
        // Forbidden
        res.sendStatus(401)
    }

}

module.exports = isSuperAdmin