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
        paymentMethod: {
            type: DataTypes.STRING,
            allow_null: false
        },
        cardNumber: {
            type: DataTypes.STRING,
            allow_null: false
        },
        ownerName: {
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
                    let card_number = transaction.cardNumber;
                    let last_digits = card_number.substr(
                        card_number.length - 4
                    );
                    let treated_number = 'XXXX-XXXX-XXXX-' + last_digits;
                    transaction.cardNumber = treated_number;
                }
            },
            sequelize
        }
    );

    Transaction.associate = function (models) {
        // associations can be defined here
    };
    return Transaction;
};