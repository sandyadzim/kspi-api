const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res) => {
    const name = req.body.name
    // const email = req.body.email
    const password = req.body.password

    User.findOne({
        where: {name, password}
    }).then(user=> {

        if(user){
            const token = 'Bearer ' + jwt.sign({userId: user.id}, 'my-secret-key')
            res.send({
                id: user.id,
                name: user.name,
                email: user.email,
                token,
                message: 'Login Sukses!!'
            })
        } else {
            res.send({
                error: true,
                message: 'Email yang Anda Masukkan Salah/Tidak Terdaftar'
            })
        }
    })
}

exports.register = (req, res) => {
    const {name, email, password} = req.body

    User.findOrCreate({
        where: {name, email, password}
    })
    .then( ([user, created]) => {
        if(created){
            const token = jwt.sign({createdId: created.id}, 'my-secret-key')
            res.send({
                name,
                email,
                token
            })
        } else {
            res.send({
                message: 'Email yang anda masukkan sudah digunakan'
            })
        }
    })
}