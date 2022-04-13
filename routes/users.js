const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users.js');

router.get('/', UsersControllers.getAllUsers);
/*router.post('/add', UsersControllers.insertUser);
router.post('/update', UsersControllers.updateUser);
router.delete('/delete', UsersControllers.deleteUser);
*/

module.exports = router;
