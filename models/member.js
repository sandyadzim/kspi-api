'use strict';
module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define('member', {
    federasi: DataTypes.STRING,
    sp: DataTypes.STRING,
    lembaga: DataTypes.STRING,
    puk: DataTypes.STRING,
    wilayah: DataTypes.STRING,
    name: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    status_karyawan: DataTypes.STRING,
    status_pkb: DataTypes.STRING,
    alamat: DataTypes.STRING,
    hp_telp: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.TEXT
  }, {});
  member.associate = function(models) {
    // associations can be defined here
  };
  return member;
};