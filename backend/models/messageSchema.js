import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain atleast 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain atleast 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter a valid email id"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number contain atleast 10 numbers"],
    maxLength: [12, "Phone number contain maximum 12 numbers"],
  },
  message: {
    type: String,
    required: true,
    minLength: [3, "Message contain atleast 3 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
