const Sequelize = require('sequelize');

const sequelize = new Sequelize('belajar_node', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;