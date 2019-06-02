'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Arts',
      [
        {
          title: 'Technicolor Portal',
          latitude: 35.22373,
          longitude: -80.84064,
          type: 'mural',
          neighborhood: 'Uptown',
          image:
            'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/uptown-mural.jpg',
          artistName: 'Douglas “Hoxxoh” Hoekzema',
          description:
            'Part of the 2018 Talking Walls Festival, this huge piece looks like a 3D tunnel to another dimension. Find it in the Preferred Parking surface lot at 407 E. 4th Street at E. Trade and S. Brevard ',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Arts', null, {});
  }
};
