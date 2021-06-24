const express = require('express');
const config = require('config');


const mongodb = require('./db/mongoDB');

mongodb.init();

const port = config.get('api.port');

const app = express();

const { bicycleRouter } = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/bicycle', bicycleRouter);


app.listen(port, console.log(`Api is running and listen to port ${port}`));
