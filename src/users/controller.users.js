const { Router } = require('express')
const UsersMongoDao = require('../DAOs/usersMongo.dao')

const Users = new UsersMongoDao()

const router = Router()

router.get('/create', (req, res) => {
  res.render('createUser.handlebars', {
    style: "createUser"
  })
})

router.get('/', async (req, res) => {
  const users = await Users.findAll()
  res.json({ message: users })
})

router.post('/', async (req, res) => {
  try {
    
  } catch (error) {
    
  }
  const {name, lastname, email, password} = req.body

  const newUserInfo = {
    name,
    lastname,
    email,
    password}

  const newUser = await Users.insertOne(newUserInfo)
  
  //UsersDao.create(dataUser)
  res.json({ message:  newUser._id })
})


module.exports = router