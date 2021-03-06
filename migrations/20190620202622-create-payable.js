'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Payables', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            transactionId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            value: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
            },
            paymentDate: {
                allowNull: false,
                type: Sequelize.DATE
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
        return queryInterface.dropTable('Payables');
    }
};