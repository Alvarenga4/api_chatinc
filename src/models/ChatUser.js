const { Model, DataTypes } = require('sequelize');

class ChatUser extends Model {
  static init (sequelize) {
    super.init({
      user_id_send: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING
      }
    }, {
      sequelize,
      tableName: 'chat_user'
    });
  }
}

module.exports = ChatUser;
