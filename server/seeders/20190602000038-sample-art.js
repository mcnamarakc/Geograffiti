'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Arts', [
      {
        latitude: 35.2510101004135,
        longitude: -80.8086094913731,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/noda-2.jpg',
        artistName: '#nodacanjam',
        description:
          'Works from several artists are featured on one building that played host to the third installment of the local spray paint fest spearheaded by Osiris Rain.',
        artistBio:
          'Artists include Osiris Rain, Darion Fleming, Jen Hill, and Matt Moore.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.248494,
        longitude: -80.80531,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://www.charlotteobserver.com/news/business/exk7az/picture186089183/alternates/LANDSCAPE_1140/image1_0378b28935ae94225379ff98b474b98a',
        artistName: 'Multiple Artists',
        description: '60x277 ft mural designed by Holly Keogh.',
        artistBio:
          'Artists include Holly Keogh, Graham Carew, Renee Cloud, Amy Herman, Lisandro Herrera, Blaine Hurdle, Grace Stott, Chris Thomas and Andrea Vail.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.2466345080548,
        longitude: -80.8048337517809,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/noda-4.jpg',
        artistName: 'Matt Hooker, Matt Moore',
        description: 'Black and white mural at NoDa company store.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.247286,
        longitude: -80.804091,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://3.bp.blogspot.com/-TB9LzF-zYmc/Wuo6EOL1yII/AAAAAAAAFSY/aHynWHox5acIt9g6OHC08ZFaIC8gYNfuwCEwYBhgL/s1600/NODA%252C%2BCharlotte%2BMural%2BCrawl%2B10.jpg',
        artistName: 'William Puckett',
        description:
          'Puckett painted abstract depictions of animals to symbolically represent this charging force that is coming through our community.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.24699,
        longitude: -80.805596,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/noda7.jpg',
        artistName: 'Nick Napoletano, Osiris Rain',
        title: 'Former Stella Mural',
        description:
          'This piece was comissioned by Stella Artois as part of a 2017 campaign. The clinking Stella glasses have since been painted over by a Lotus flower.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.24712,
        longitude: -80.805555,
        type: 'wall-poem',
        neighborhood: 'NODA',
        image:
          'https://knightfoundation.imgix.net/blog_posts/images/000/009/808/original/Ocean.jpg.jpg?ixlib=rails-1.1.0',
        artistName: 'Unknown Artist',
        title: 'oceanoceanocean',
        description: 'Part of the Wall Poems initiative',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.247249,
        longitude: -80.805341,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/noda-5a.jpg',
        artistName: 'William Puckett',
        title: 'Crowd of People',
        description:
          "You'll find something new every time you look at this iconic Where's Waldo-esque wall at a popular neighborhood bar.",
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.243359,
        longitude: -80.810867,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSyIQyxzTHlb8FMcGHGWG5Nz_GKG-0jFaQP4gGKD3rHSIUCKcvg',
        artistName: 'William Puckett',
        description:
          'This 14,000-square-foot mural tells the story of the Mecklenburg Declaration of Independence.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.242849,
        longitude: -80.798841,
        type: 'mural',
        neighborhood: 'NODA',
        image: 'http://cltvictor.com/wp-content/uploads/2018/12/IMG_7897.jpg',
        artistName: 'Trasher',
        description: 'Large mural depicting a monster at Ink Floyd.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.2472403954741,
        longitude: -80.8055139044362,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/noda6.jpg',
        artistName: 'Nick Napoletano',
        description: 'Large ribbon portrait at former Solstice Tavern.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.237907,
        longitude: -80.817343,
        type: 'mural',
        neighborhood: 'NODA',
        image:
          'https://www.charlottefive.com/wp-content/uploads/2018/05/Southern_Tiger_by_Alex_Cason-0163-768x512.jpg',
        artistName: 'Alex D',
        title: 'Frida',
        description: 'A Frida portrait.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.220352,
        longitude: -80.81283,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://plazamidwood.com/wp-content/uploads/2018/03/Screenshot-2018-3-18-Matthew-Spivey-on-Instagram-%E2%80%9CDream-in-color-plazamidwood-mural-muralart-plazamidwood-cityscape-cl....jpg',
        artistName: 'Matt Hooker, Matt Moore, Tucker Sward',
        title: 'Plaza Midwood Tribute',
        description: 'Large mural at Coaltrane\'s.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.219766,
        longitude: -80.804363,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://www.charlottefive.com/wp-content/uploads/2018/05/Skylark_by_Alex_Cason-7318-768x512.jpg',
        artistName: 'JEKS',
        title: 'Elvis',
        description: 'Large mural depicting Elvis.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.220608,
        longitude: -80.814996,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/plaza-midwood-7.jpg',
        artistName: 'Unknown Artist',
        title: 'Superheroes Mural',
        description: 'Superheroes mural at Midwood Smokehouse',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.221726,
        longitude: -80.822174,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/plaza-midwood-2.jpg',
        artistName: 'JEKS, Jack of the Dust',
        title: 'Golden Skull',
        description: 'Part of the 2018 Talking Walls Festival.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.220314,
        longitude: -80.811941,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'http://www.charlottefive.com/wp-content/uploads/2018/10/Pizza_Peel-by-Houston-Ray.jpg',
        artistName: 'Darion Fleming',
        title: 'Snake',
        description: 'Part of the 2018 Talking Walls Festival.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.220467,
        longitude: -80.814273,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://www.charlottefive.com/wp-content/uploads/2018/05/The-Nook_by_Alex_Cason-5672-768x512.jpg',
        artistName: 'Matt Hooker, Matt Moore, Tucker Sward',
        title: 'Neptune',
        description:
          ' It’s meant as a political statement on the rapidly changing face of the neighborhood.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.220351,
        longitude: -80.812813,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://www.charlottefive.com/wp-content/uploads/2016/09/DRAGQUEEN_004.jpg',
        artistName: 'Nick Napoletano, Matt Hooker, Matt Moore',
        title: 'Brandy Alexander',
        description:
          'You’ll see drag legend Brandy Alexander wearing Pat McCrory earrings with nods to House Bill 2 in this aqua and purple tribute.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.218791,
        longitude: -80.813711,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://www.charlottefive.com/wp-content/uploads/2018/05/Smooth_Monkey_Clt_by_Alex_Cason-7295-768x512.jpg',
        artistName: 'Ashley Graham',
        description: 'Large mural depicting apes and fresh fruit.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.219497,
        longitude: -80.813816,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://www.charlottefive.com/wp-content/uploads/2018/05/Peculiar_Rabbit_by_Alex_Cason-7187-768x512.jpg',
        artistName: 'Southern Tiger Collective',
        title: 'Vinny the Rabbit',
        description:
          'A rabbit holding a large beer stein in Van Gogh’s Starry Night-style.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.221745,
        longitude: -80.822085,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/plaza-midwood-1a.jpg',
        artistName: 'Gil Croy',
        title: 'Pride',
        description:
          'The rainbow tribute to equality is a neighborhood landmark.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.219031,
        longitude: -80.810867,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image: 'https://i.imgur.com/6qVPxD8.jpg',
        artistName: 'Darion Fleming',
        title: 'Sushi',
        description:
          'Cross sections of sliced fish are right at home at a neighborhood sushi joint.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.221037,
        longitude: -80.817233,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/plaza-midwood-8.jpg',
        artistName: '@gardenofjourney',
        description:
          'A visual homage to all that is strength, resilience, and womanhood.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        latitude: 35.221061,
        longitude: -80.8134,
        type: 'mural',
        neighborhood: 'Plaza-Midwood',
        image:
          'https://media2.fdncms.com/charlotte/imager/u/slideshow/9820375/par_napoletano2.jpg',
        artistName: 'Nick Napoletano',
        title: 'Under the Water',
        description:
          'Be sure to walk around the entire building to catch the full effect of this optically distorted corner mural.',
        stillExists: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Arts', null, {});
  }
};
