const mongoose=require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      // trim: true,
    },

    email: {
      type: String,
    },

    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("form", userSchema);
