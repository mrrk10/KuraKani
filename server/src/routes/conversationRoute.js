const router = require('express').Router();
const {conversationController,getUserConversation}=require('../controllers/conversationController')


router.post('/conversation',conversationController)

router.get("/conversation/:userId",getUserConversation) 

module.exports=router