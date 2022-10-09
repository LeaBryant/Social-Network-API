const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Type in a valid email address']

    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

usersSchema
  .virtual('friendCount').get(function () {
  return `${this.friends.length}`;
});

//create the model to get the prebuilt methods that Mongoose provides
const Users = model('users', usersSchema);

module.exports = Users;