const router = require('express').Router();

const userRouter = require('./userController');

router.use('/user', userRouter)

module.exports = router;