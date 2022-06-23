'use strict'
const app = require('./app');
const {conn} = require('./dataBase');
const financialMovementRouter = require('./src/controllers/financialMovement/routesFinancialMovement');
const categoryRouter = require('./src/controllers/category/routesCategory')

app.use('/financialMovement', financialMovementRouter)
app.use('/category', categoryRouter)

conn.sync({force: true}).then(function () {
    app.listen(3001, function () { 
      console.log('%s listening at 3001');
    });
});


