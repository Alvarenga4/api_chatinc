const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init (sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize
    });
  }

  /*
  //associacoes
  static association(model){

  } */
}

module.exports = Users;
