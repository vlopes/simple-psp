'use strict';
module.exports = (sequelize, DataTypes) => {
    const Payable = sequelize.define('Payable', {
        transactionId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        value: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING
        },
        paymentDate: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {});

    return Payable;
};