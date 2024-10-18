import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('mern project geting start')
})
dotenv.config();
const PORT = process.env.PORT ||4000;
const URI = process.env.MongoDBURI;

try{
  mongoose.connect=(URI,
    {useNewUrlParser: true,
      useUnifiedTopology: true,});
      console.log("connected to database");
}
catch (error){
  console.log("error :"+error);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})