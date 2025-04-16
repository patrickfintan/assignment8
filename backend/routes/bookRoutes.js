import express from 'express';
import {Book} from '../models/BookModels.js';
const router = express.Router();

//Route for creating new Book
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.summary ||
            !request.body.year
        ) {return response.status(400).send({
            message: 'Send all required fields',
        });
    }

    const newBook = {
        title: request.body.title,
        author: request.body.author,
        summary: request.body.summary,
        year: request.body.year,
    }

    const book = await Book.create(newBook);

    return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// route to get all Books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// route to get ONE Book by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


//route to update a Book
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.summary ||
            !request.body.year
        ) {
            return response.status(400).send({
                message: 'Hey send all required fields ()',
            });
        }

        const {id} = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body)

        if(!result) {
            return response.status(404).json({message: 'Book not found'});
        }

        return response.status(200).send({message: 'Book updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//route to delete a Book
router.delete('/:id', async (request, response) => {
    try{
       const {id} = request.params;
       const result = await Book.findByIdAndDelete(id);

       if(!result) {
        return response.status(404).json({message: 'Customer not found'});
    }

    return response.status(200).send({message: 'Customer deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


export default router;