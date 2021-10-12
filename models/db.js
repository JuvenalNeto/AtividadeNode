const Sequelize = require("sequelize")

const sequelize = new Sequelize('testeNode', 'jneto', 'senha123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

//mysql
//senha123
//jneto