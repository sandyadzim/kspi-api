'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      federasi: {
        type: Sequelize.STRING
      },
      sp: {
        type: Sequelize.STRING
      },
      lembaga: {
        type: Sequelize.STRING
      },
      puk: {
        type: Sequelize.STRING
      },
      wilayah: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      status_karyawan: {
        type: Sequelize.STRING
      },
      status_pkb: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      hp_telp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('members');
  }
};