'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      'Businesses',
      [
        {
          latitude: 35.230897,
          longitude: -80.826795,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "Birdsong Brewing Company",
          description: "Expect a laid back neighborhood feel. They’ve got a nice patio space for warm weather days.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.2496085155633,
          longitude: -80.7964289950614,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "Bold Missy Brewing",
          description: "This female-owned brewery specializes in well-loved styles of beer whose clever names pay homage to 'Bold Missies' that have shaped history.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.2250386,
          longitude: -80.8212933775952,
          type: "brewery",
          neighborhood: "Plaza-Midwood",
          businessName: "Catawba Brewing",
          description: "Catawba’s easy-drinking beer and patio with a skyline view makes the new 10,000-square-foot taproom a weekend must",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.249929,
          longitude: -80.796197,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "Divine Barrel Brewing",
          description: "Owner Ben Dolphens describes Divine Barrel’s beer as a 'good mixture of different experiments' that take on classic styles.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.2451927959184,
          longitude: -80.8090455102041,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "Heist Brewery",
          description: "Think industrial meets old pub. Heist is no frills, just good food and beer.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.218773,
          longitude: -80.813031,
          type: "brewery",
          neighborhood: "Plaza-Midwood",
          businessName: "Legion Brewing",
          description: "Legion’s OG location in Plaza has a cozy, neighborhood vibe.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.2509357332665,
          longitude: -80.812684562196,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "NoDa Brewing Company",
          description: "In addition to beer, they also have craft spiked seltzer on tap.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.220728,
          longitude: -80.815619,
          type: "brewery",
          neighborhood: "Plaza-Midwood",
          businessName: "Pilot Brewing",
          description: "There’s no flagship or signature beer, as all batches are small and experimental. They call themselves a nano-brewery.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.246836,
          longitude: -80.806038,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "Protagonist Clubhouse",
          description: "Head brewer, Jeremy Claeys comes to Protagonist from Asheville’s Wicked Weed Brewing.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.219877,
          longitude: -80.805567,
          type: "brewery",
          neighborhood: "Plaza-Midwood",
          businessName: "Resident Culture Brewing Company",
          description: "The brewery specializes in hop-forward IPAs and pale ales, lagers, barrel-aged beers and fermented ales.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        },
        {
          latitude: 35.2477084285714,
          longitude: -80.8043514897959,
          type: "brewery",
          neighborhood: "NODA",
          businessName: "Salud Cerveceria",
          description: "Salud Beer Shop’s in-house brewery. Head upstairs to enjoy a pint in their 3,100-square-foot taproom. They also have a kitchen serving up wood-fired pizza.",
          stillExists: true,
          createdAt: new Date(), 
          updatedAt: new Date()

        }
      ]
    )
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Businesses', null, {});

  }
};

