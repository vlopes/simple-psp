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
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            payment_method: {
                type: Sequelize.STRING
            },
            card_number: {
                type: Sequelize.STRING
            },
            owner_name: {
                type: Sequelize.STRING
            },
            ccv: {
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