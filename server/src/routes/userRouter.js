const router = require('express').Router();

const {UserController,userDetailController}=require('../controllers/usereController')
router.get('/users/:id',UserController)
router.get('/users/',userDetailController)
module.exports=router