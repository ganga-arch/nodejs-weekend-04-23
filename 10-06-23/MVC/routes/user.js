const express = require('express');
const router = express.Router();
const userController = require('../controller/user');


router.get('/userlist',userController.getUserDetails);
router.post('',userController.postUserDetails);

module.exports = router;