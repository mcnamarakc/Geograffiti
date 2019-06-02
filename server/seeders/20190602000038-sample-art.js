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
        },
        {
          title: 'Behind the curtain at Carolina Theatre',
          latitude: 35.22822,
          longitude: -80.841,
          type: 'mural',
          neighborhood: 'Uptown',
          image:
            'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/uptown.jpg',
          artistName: 'Matt Hooker and Matt Moore',
          description:
            'Characters (including Elvis) take the painted stage with a realistic red curtain. The historic theatre is undergoing a massive renovation, including the addition of a 20-story hotel tower atop the building, so this piece has been relocated under the scaffolding on N. Tryon. Find it at 220 N. Tryon Street. ',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Drag Flamingo',
          latitude: 35.25082,
          longitude: -80.80834,
          type: 'mural',
          neighborhood: 'NoDa',
          image:
            'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/noda-2.jpg',
          artistName: 'Osiris Rain',
          description:
            'Works from several artists are featured on one building that played host to the third installment of the local spray paint fest spearheaded by Osiris Rain. Artists include Darion Fleming, Jen Hill, Matt Moore and more. Find it at 3224 Benard Avenue.',
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
