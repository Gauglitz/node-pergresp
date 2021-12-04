const Sequelize = require('sequelize')

const connection = new Sequelize('pergresp', 'root', 'SUASENHA', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = connection