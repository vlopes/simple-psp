'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            value: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            payment_method: {
                allowNull: false,
                type: Sequelize.STRING
            },
            card_number: {
                allowNull: false,
                type: Sequelize.STRING
            },
            owner_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ccv: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Transactions');
    }
};