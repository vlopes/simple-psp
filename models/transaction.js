'use strict';
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        value: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        payment_method: DataTypes.STRING,
        card_number: DataTypes.STRING,
        owner_name: DataTypes.STRING,
        ccv: DataTypes.INTEGER
    }, {});

    Transaction.associate = function (models) {
        // associations can be defined here
    };
    return Transaction;
};