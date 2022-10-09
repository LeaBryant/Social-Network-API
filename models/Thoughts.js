const { Schema, model, Types, models } = require("mongoose");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },

    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

ThoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
})


////create the model to get the prebuilt methods that Mongoose provides
const Thought = model('thought', ThoughtsSchema);

module.exports = Thought;