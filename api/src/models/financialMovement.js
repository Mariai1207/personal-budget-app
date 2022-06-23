'use strict';

module.exports = function (sequelize, type){
    return sequelize.define("financialMovement", {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        concept: type.STRING,
        amount: type.INTEGER,
        type: type.STRING,
        date: type.STRING
    }, {
        timestamps:false
      }
    )
}
