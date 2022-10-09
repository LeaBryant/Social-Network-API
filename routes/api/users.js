const router = require("express").Router();
const {
  getallUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getallUsers).post(createUser);

router.
route("/:id").get(getUserId).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;