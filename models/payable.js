'use strict';
module.exports = (sequelize, DataTypes) => {
    const Payable = sequelize.define('Payable', {
        transaction_id: DataTypes.INTEGER,
        value: DataTypes.INTEGER,
        status: DataTypes.STRING,
        payment_date: DataTypes.DATE
    }, {});
    Payable.associate = function (models) {
        Payable.belongsTo(models.Transaction);
    };
    return Payable;
};