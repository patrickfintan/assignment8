//4.1) import mongoose
import mongoose from "mongoose";

//4.3) now create a schema (a template that the object must follow) 
//Note we do not need to create ID as the database will automatically do this
//once this is done go back to line under step 4.2 and insert the schema
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        }
    }
);

export const Book = mongoose.model('Book', bookSchema);