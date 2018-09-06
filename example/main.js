import express from 'express';
import hello from './routes/index';

let port = 8000;
const app = express();

app.use("/", hello);

const server = app.listen(port, ()=>{
    console.log("== Traffic-Logger example application start.");
    console.log("    (Running Port Number:" ,port, ")");
    console.log("  * If you want to finish this app, please input \"ctrl+c (^C)\"");
});