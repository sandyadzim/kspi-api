const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 4000

const AuthController = require('./controllers/auth')
const AnggotaController = require('./controllers/anggota')

const { authenticated } = require('./middleware')

app.use(bodyParser.json())

app.group('/kspi', (router) => {

    // Login
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    // Anggota
    router.get('/anggota', AnggotaController.showAnggota)
    router.get('/anggota/:anggota_id', AnggotaController.showAnggotaById)
    router.post('/anggota', AnggotaController.createAnggota)
    router.put('/anggota/:anggota_id', authenticated, AnggotaController.updateAnggota)
    router.delete('/anggota/:anggota_id', authenticated, AnggotaController.deleteAnggota)
})
// app.listen(port, () => console.log('Listening o Port ${4000}'))
app.listen(process.env.PORT||4000, () => console.log(`Listening o Port ${4000}`))