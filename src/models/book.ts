import { Schema, model } from "mongoose";

interface IBook {
  name: string;
  author: string;
  publishYear: number;
  description: string;
}

const bookSchema = new Schema<IBook>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number, // matches interface
    required: true,
  },
  description: {
    type: String, //  added description
    required: true,
  },
});

// Create the model
const Book = model<IBook>("Book", bookSchema);

export default Book;
