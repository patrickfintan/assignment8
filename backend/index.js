
import express from "express";

import bookRoutes from './routes/bookRoutes.js';

import cors from "cors";

import {PORT, mongoDBURL} from "./config.js";

import mongoose from 'mongoose';

const app = express();

app.use(express.json());    

app.use(cors());

app.get('/', (request, response) => {
    
    console.log(request);
    return response.status(234).send('running...');

});


app.use('/books', bookRoutes);


mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Successfully connected to database');

    app.listen(PORT, () => {
        console.log('App is listening for PORT: ' + PORT);
    })
})
.catch(() => {
    //console.log(error);
    console.log("error");
})