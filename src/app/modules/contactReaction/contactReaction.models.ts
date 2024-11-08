import { Schema, model } from 'mongoose';
import { TContactReaction } from './contactReaction.interface';

//Reaction Schema
const reactionSchema = new Schema<TContactReaction>({
  id: {
    type: String,
    required: [true, 'Card Id Is Required'],
    trim: true,
  },
  loved: {
    type: Boolean,
    default: false,
  },
});

//Model Creation
export const reactsModel = model<TContactReaction>('reaction', reactionSchema);
