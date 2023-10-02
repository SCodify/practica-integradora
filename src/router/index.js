const usersController = require('../users/controller.users')

const router = (app) => {
  app.use('/users', usersController)
  //app.use('/carts', cartsController)
  //app.use('/products', productsController)
}

module.exports = router