'use strict';

module.exports = function (sequelize, type){
    return sequelize.define("Category", {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
    }, {
        timestamps:false
      }
    )
}
