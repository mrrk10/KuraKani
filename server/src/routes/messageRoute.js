const router = require('express').Router()
const {messageController,messageGetController}=require('../controllers/messageController')

router.post("/message",messageController)
router.get("/message/:conversationId",messageGetController)
module.exports=router