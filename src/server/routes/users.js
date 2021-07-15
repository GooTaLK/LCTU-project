const userCtrl = require('../controllers/users.controller.js');

const { Router } = require('express');
const router = Router();

router.get('/users', userCtrl.getUsers);

router.get('/user/:code/:phone', userCtrl.getUser);

router.patch('/user/:code/:phone', userCtrl.patchUser);

module.exports = router;
