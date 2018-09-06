import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import route from './routes/main';

const PORT = 8000;
const app = express();

app.use(bodyParser.json());
app.use('/example',route);
app.use(session({
    secret: 'trafficLogger#5036',
    resave: false,
    saveUninitialized: true
}));

let server = app.listen(PORT, function(){
    console.log("Traffic-Logger example server start.");
});