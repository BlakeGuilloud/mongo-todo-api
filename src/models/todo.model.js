import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  completed: Boolean,
  text: String,
});

module.exports = mongoose.model('Todo', TodoSchema);
