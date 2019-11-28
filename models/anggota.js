'use strict';
module.exports = (sequelize, DataTypes) => {
  const anggota = sequelize.define('anggota', {
    name: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    status_karyawan: DataTypes.STRING,
    status_pkb: DataTypes.STRING,
    alamat: DataTypes.STRING,
    hp_telp: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.TEXT
  }, {});
  anggota.associate = function(models) {
    // associations can be defined here
  };
  return anggota;
};