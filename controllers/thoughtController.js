const { Thoughts, Users } = require("../models");

module.exports = {
  // Get all courses
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getThoughtID(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtID })
      .select('-__v')
      .then((thoughts) => 
         !thoughts
           ? res.status(404).json({ message: 'No thought ID' })
           :res.json(thoughts)
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
    .then((users) =>
    !users
      ? res.status(404).json({
          message: 'Thought is created but no user found',
        })
      : res.json('Created the application 🎉')
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtID }, 
      { $set: req.body },
      { new: true }
    )
      .then((thoughts) => 
        !thoughts
          ? res.status(404).json({ message: 'No application exist' })
          : res.json(thoughts)
      )
      .catch((err) =>
        res.status(400).json(err));
},

  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) => {
       !thoughts 
        ? res.status(404).json({ message: 'No thought exist' })
         : User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtID } },
          { new: true }
        )
      })
      .then((users) => 
        !users 
          ? res.status(404).json({ message: 'User not found', 
        })
         :res.json({ message: 'thought deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $push: { reactions: body } },
      { new: true }
    )
      .then((users) => 
        !users 
          ?res.status(404).json({ message: 'No thought found!' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));  
    },

  deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtID },
      { $pull: { reactions: { reactions: req.params.reactionID } } },
      { new: true }
    )
      .then((users) => 
        !users
        ? res.status(404).json({ message: 'No thought found!' })
        : res.json(users)
        )
        .catch((err) => res.status(500).json(err));  
      },
};

