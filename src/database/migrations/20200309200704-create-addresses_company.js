'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('addresses_company', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        head_company_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'head_company', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        company_country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_ibge: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_neighborhood: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_complement: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_number: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company_zipcode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('addresses_company');
  }
};
