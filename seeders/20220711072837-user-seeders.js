"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "saepp",
          profession: "Admin Micro",
          role: "admin",
          email: "septianadhitya69@gmail.com",
          password: await bcrypt.hash("saep123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "septian",
          profession: "Front-End Developer",
          role: "student",
          email: "dsrisk911@gmail.com",
          password: await bcrypt.hash("saepku123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("users", null, {});
  },
};
