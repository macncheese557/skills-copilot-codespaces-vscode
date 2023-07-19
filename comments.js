// Create web server 
// 1. Create web server
// 2. Create router
// 3. Create route handler
// 4. Start server

// 1. Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// 2. Create router
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');

// 3. Create route handler
app.use(cors());
app.use(bodyParser.json());
app.use('/api/comments', commentsRouter);
app.use('/api/users', usersRouter);

