'use strict';
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        value: {
            type: DataTypes.INTEGER,
            allow_null: false
        },
        description: {
            type: DataTypes.TEXT,
            allow_null: false
        },
        payment_method: {
            type: DataTypes.STRING,
            allow_null: false
        },
        card_number: {
            type: DataTypes.STRING,
            allow_null: false
        },
        owner_name: {
            type: DataTypes.STRING,
            allow_null: false
        },
        ccv: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        hooks: {
            beforeSave: (transaction) => {
                let card_number = transaction.card_number
                let last_digits = card_number.substr(card_number.length - 4)
                let treated_number = 'XXXX-XXXX-XXXX-' + last_digits
                transaction.card_number = treated_number
            }
        },
        sequelize
    });

    Transaction.associate = function (models) {
        // associations can be defined here
    };
    return Transaction;
};