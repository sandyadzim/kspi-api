'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('anggota', [
      {
        name: 'Sandy Rahmansyah',
        jenis_kelamin: 'Laki-Laki',
        status_karyawan: 'PKWT',
        status_pkb: 'Ada',
        alamat: 'Jl. Jakarta Gang Perjuangan',
        hp_telp: '6283153440780',
        email: 'sandy@gmail.com',
        foto: 'https://cdn0-production-images-kly.akamaized.net/mbCCCWjkvTV9b1Jf5p2Oc1zOuA4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2832638/original/037807400_1560947825-20190619-Anya-Geraldine-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('anggota', null,{});
  }
};
