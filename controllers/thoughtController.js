const { Thought, User } = require("../models");
//methods for getting, creating, deleting, and updating thoughts
module.exports = {
  // Get all courses
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getThought(req, res) {
    Thought.findOne({ _id: req.params.Thoughtid })
      .then((thoughts) => 
         !thoughts
           ? res.status(404).json({ message: 'No thought with that ID' })
           :res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
      },
// Create a course
createThought(req, res) {
  Thought.create(req.body)
    .then((thoughts) => {
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        {$addToSet: { applications: application._id } },
        { new: true }
      );
    })
    .then((user) =>
    !user
      ? res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      : res.json('Created the application 🎉')
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId }, 
      { $set: req.body },
      { new: true }
    )
      .then((thoughts) => 
        !thoughts
          ? res.status(404).json({ message: 'No application exist' })
          : res.json(thoughts)
      )
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
  })
},

  deleteThought({ params }, res) {
    Thought.findOneAndRemove({ _id: params.thoughtId })
      .then((thoughts) => {
       !thoughts 
        ? res.status(404).json({ message: 'No thought exist' })
         : User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        )
      })
      .then((user) => 
        !user 
          ? res.status(404).json({ message: 'User found', 
        })
         :res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true }
    )
      .then((user) => 
        !user 
          ?res.status(404).json({ message: 'No user found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));  
    },

  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((user) => 
        !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));  
      },
};

module.exports = thoughtController;