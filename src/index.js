// require('dotenv').config({path: './env'});

// use try catch while doing the db connection(possibilities of error)
// also use async await because db takes time to load data(can be placed far away from us)

//  approach 2 => add the connection code in the file in db folder and import here and execute 

import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
});


connectDB();





/*
import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import express from 'express';
const app = express(); //object of express class

// approach 1 => write whole code of db connection as well as express in one file
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // function to handle issue at our express's end
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        // if db connection is successful then our backend is ready to take requests
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR:", error);
        throw err
    }
})()//this is an iife function

*/