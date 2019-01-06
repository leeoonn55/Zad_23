import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//create schema for note

const noteSchema = new Schema({
  task: { type: 'String', required: true },
  id: { type: 'String', required: true }
});



export default mongoose.model('Note', noteSchema);
