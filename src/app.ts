import express  from "express";
import {movieDB } from './conf/db'

const app = express()
movieDB();


app.use(express.json());



app.listen(5001, ()=>
console.log(" the port 5001 is work "));