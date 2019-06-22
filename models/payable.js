'use strict';
module.exports = (sequelize, DataTypes) => {
    const Payable = sequelize.define('Payable', {
        transaction_id: {
            allowNull: false,
            type:DataTypes.INTEGER
        },
        value: {
            allowNull: false,
            type:DataTypes.INTEGER
        },
        status: {
            allowNull: false,
            type:DataTypes.STRING
        },
        payment_date: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {});
    Payable.associate = function (models) {
        Payable.belongsTo(models.Transaction);
    };
    return Payable;
};