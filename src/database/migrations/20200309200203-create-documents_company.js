'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('documents_company', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        ie: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        im: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cnpj: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        suframa: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cnae: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        issqn_tributary: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sped_profile: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        simples_nascional: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        head_company_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'head_company', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
      return queryInterface.dropTable('documents_company');
  }
};
