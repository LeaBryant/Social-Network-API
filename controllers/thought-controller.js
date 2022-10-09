const { Thoughts, Users } = require("../models");
const { db } = require('../models/Users');

module.exports = {
  getThoughts(req, res) {
    Thoughts.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  getThoughtID(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtID })
    .then((thought) =>
    !thought
        ? res.status(404).json({ message: "No thought found!" })
        : res.json(thought)
)
.catch((err) => res.status(500).json(err));
},

// Create 
createThought(req, res) {
  Thoughts.create(req.body)
    .then((thoughts) => {
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        {$addToSet: { thoughts: thought._id } },
        { new: true }
      );
    })
    .then((users) => {
      console.log(user);
    !users
      ? res.status(404).json({
          message: 'Thought is created but no user found',
        })
      : res.json('Created the application 🎉')
      })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtID }, 
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => 
        !thought
          ? res.status(404).json({ message: 'No application exist' })
          : res.json(thought)
      )
      .catch((err) =>
        res.status(400).json(err));
},

  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) => 
       !thoughts 
        ? res.status(404).json({ message: 'No thought exist' })
         : Users.deleteOne({ _id: { $in: thoughts.users } })
         )
         .then(() => res.json({ message: "Thought deleted!" }))
         .catch((err) => res.status(500).json(err));
 },

  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $push: { reactions: body } },
      {runValidators: true, new: true }
    )
      .then((thought) => 
        !thought 
          ?res.status(404).json({ message: 'No thought found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));  
    },

  deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $pull: { reactions: { reactions: req.params.reactionID } } },
      { new: true }
    )
      .then((thought) => 
        !thought
        ? res.status(404).json({ message: 'No thought found!' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));  
      },
};

