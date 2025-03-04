// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert("Projects", [
//       {
//         image: "Client/src/assets/2025-11.jpg",
//         title: "بنك الملابس",
//         description: "امنح الدفء لمن يحتاج من خلال التبرع.",
//         goal: 12000,
//         raised: 6000,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete("Projects", null, {});
//   },
// };
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const Project = require('../models/Project'); // تأكد من أن المسار صحيح

const projects = [
  {
    id: 2,
    image: "https://images.pexels.com/photos/8078514/pexels-photo-8078514.jpeg",
    title: "سلة غذائية",
    description: "مبادرة الغذاء الصحي ساهم في تقديم وجبات للمحتاجين.",
    goal: 15000,
    raised: 0,
    createdAt: new Date('2025-03-02T14:37:30.427+03:00'),
    updatedAt: new Date('2025-03-02T14:37:30.427+03:00')
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/27597369/pexels-photo-27597369.jpeg",
    title: "بنك الملابس",
    description: "امنح الدفء لمن يحتاج من خلال التبرع.",
    goal: 12000,
    raised: 0,
    createdAt: new Date('2025-03-02T15:05:58.071+03:00'),
    updatedAt: new Date('2025-03-02T15:05:58.071+03:00')
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/11580454/pexels-photo-11580454.jpeg",
    title: "دعم التعليم",
    description: "ساعد في نشر المعرفة من خلال التبرع .",
    goal: 8000,
    raised: 4500,
    createdAt: new Date('2025-03-02T15:13:09.124+03:00'),
    updatedAt: new Date('2025-03-02T15:13:09.124+03:00')
  }
];

(async () => {
  try {
    await sequelize.sync(); // تأكد من أن قاعدة البيانات متصلة
    await Project.bulkCreate(projects, { ignoreDuplicates: true });
    console.log('Data seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
})();
