const router = require("express").Router();
const {
  getThoughts,
  getThoughtID,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");


router.route('/')
.get(getThoughts)
.post(createThought);


router.route('/:getThoughtID')
.get(getThoughts)
.put(updateThought)
.delete(deleteThought);

//POST Reaction at /api/thoughts/:userId/:thoughtId
router.route('/:thoughtsID/reactions')
.put(addReaction);


router.route('/:thoughtsID/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;