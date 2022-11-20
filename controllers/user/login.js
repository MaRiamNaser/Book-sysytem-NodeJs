const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const fs = require('fs')
let cert = fs.readFileSync('secret.key')
const db = require("../../DB/database")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
    User
} = db.models

const loginUser = async (req, res) => {

    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, bool) {
                if (bool) {
                    // create jwt 
                    const flag = jwt.sign(
                        {id:user.id},
                     cert, (err, token) => {

                        if (err) {
                            res.json({
                                message: "something's wrongs !"
                            })
                        }
                        // update token
                        const updatedToken = User.update({
                            
                            token: token
                        }, {
                            where: {
                                email: req.body.email,
                            }
                        })
                        
                        //response
                        if (updatedToken) {

                            res.json({
                                token
                            })
                        }else{
                            res.json({
                             msg:"  something went wrong  while saving token!"
                            })

                        }

                    })
                    ///*********** */
                } else {

                    res.status(401).send({
                        message: 'passwords do not match'
                    });
                }
            });

        } else {

            res.status(404).send({
                "msg": "User Not found!"
            })
        }

    } catch (e) {
        res.send({
            "msg": e
        })
    }

}

module.exports = loginUser