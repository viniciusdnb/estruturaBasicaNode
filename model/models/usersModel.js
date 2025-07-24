const connection = require('../core/connection');
const { DataTypes } = require('sequelize');

const Users = connection.define(
    'Users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,

        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Users;
