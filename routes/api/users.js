const router = require("express").Router();
const {
  getallUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

router.route('/')
.get(getallUsers)
.post(createUser);

router.route('/:userid')
.get(getUserId)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;