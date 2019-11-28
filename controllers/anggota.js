const models = require('../models')
const Anggota = models.anggota

exports.showAnggota = (req, res) => {
    Anggota.findAll().then(result => res.send(result))
}

exports.showAnggotaById = (req, res) => {
    Anggota.findAll({
        where: {id: req.params.anggota_id}
    }).then(result => res.send(result))
}

exports.createAnggota = (req, res) => {
    const {name, jenis_kelamin, status_karyawan, status_pkb, alamat, hp_telp, email, foto} = req.body
    Anggota.create({
        name,
        jenis_kelamin,
        status_karyawan,
        status_pkb,
        alamat,
        hp_telp,
        email,
        foto
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true,
            message: 'Buat Anggota Gagal'
        })
    })
}

exports.updateAnggota = (req, res) => {
    const {name, jenis_kelamin, status_karyawan, status_pkb, alamat, hp_telp, email, foto} = req.body
    Anggota.update({
        name,
        jenis_kelamin,
        status_karyawan,
        status_pkb,
        alamat,
        hp_telp,
        email,
        foto
    },
    {
        where: {id: req.params.anggota_id}
    })
    .then(result => {
        if(result){
            res.send({
                id: req.params.anggota_id,
                Name : name,
                message: 'Update Success!'
            })
        } else {
            res.send({
                error: true,
                message: 'Update Gagal!'
            })
        }
    })
}

exports.deleteAnggota = (req, res) => {
    Anggota.destroy({
        where: {id: req.params.anggota_id}
    })
    .then(result => {
        res.send({
            status: 'success',
            id: req.params.anggota_id,
            message: 'Hapus Anggota Berhasil'
        })
    })
    .catch(e => {
        res.send({
            status: 'error',
            message: 'Hapus Anggota gagal',
            error: e
        })
    })
}