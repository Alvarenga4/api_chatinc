if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
module.exports = {
    dialect: `${process.env.DIALECT_DATABASE}`,
    host: `${process.env.HOST_DATABASE}`,
    username: `${process.env.USERNAME_DATABASE}`,
    password: `${process.env.PASSWORD_DATABASE}`,
    database: `${process.env.DATABASE_NAME}`,
    define: {
        timestamps: true,
        underscored: true,
    },
};