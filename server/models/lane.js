import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

// create schema for lane

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
});

function populateNotes(next) {
  this.populate('notes');
  next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
// create and export model for Lane

export default mongoose.model('Lane', laneSchema);
