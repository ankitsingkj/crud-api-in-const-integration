import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
}

const userSchema = new Schema<IUser>({
  name:
  
  { type: String,
     required: true
     },
  age:
   { type: Number,
     required: true 
    },
});

export const User = mongoose.model<IUser>("User", userSchema);