const Users = require('../models/Users');

module.exports = {
  getallUsers(req, res) {
    Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },

  getUserId(req, res) {
    Users.findOne({ _id: req.params.id })
        .select('-__v')
        .then((users) =>
        !user
            ? res.status(404).json({ message: 'No user found!' })
            : res.json(users)
    )
    .catch((err) => res.status(500).json(err));
},

  createUser(req, res) {
    Users.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
  },

  updateUser(req, res) {
    Users.findOneAndUpdate({ _id: req.params.id }, {$set: req.body}, { new: true })
          .then((users) =>
            !users
            ? res.status(404).json({ message: 'No user found!' })
            : res.json(users)
          )
          .catch((err) => res.status(500).json(err));
      },

  deleteUser(req, res) {
    Users.findOneAndDelete({ _id: req.params.id })
      .then(() =>
        res.json({ message: "Deleted" }))
        .catch((err) => res.status(500).json(err));
      },

  addFriend(req, res) {
    Users.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .then((users) => 
        !users 
          ? res.status(404).json({ message: "No user found!" })
          : res.json(users)
        )
        .catch((err) => res.status(500).json(err));
      },

  deleteFriend(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((users) => 
        !users 
          ? res.status(404).json({ message: "No user found!" })
          : res.json(users)
      )
      .catch((err) => resres.status(500).json(err));
  },
};

