const userCtrl = require('../controllers/users.controller.js');

const { Router } = require('express');
const router = Router();

router.get('/', userCtrl.getUsers);

router.get('/:code/:phone', userCtrl.getUserById);

module.exports = router;
