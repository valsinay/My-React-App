const User = require("../models/user")
const jwt = require("../utils/jwt");
const router = require('express').Router();
const config = require('../config/config')

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    User.create({ username, password })
        .then((user) => res.send(user))
        .catch(next);
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username })
        .then((user) => {
            if (!user) {
                res.status(404);
                return;
            }
            return Promise.all([user, user.matchPassword(password)])
        })
        .then(async ([user, match]) => {
            if (!match) {
                res.status(401).send('Invalid password');
                return;
            }

            const token = await jwt.create({ id: user._id });
            res.cookie(config.authCookieName, token);
            res.cookie('userId', user._id);
            res.send({ token, user });
        })
        .catch(next);
});

router.post('/logout', (req, res, next) => {
    res.clearCookie(config.authCookieName).send('Logout successfully!');
})

module.exports = router;