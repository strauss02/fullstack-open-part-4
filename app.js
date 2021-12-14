const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/api/blogs', async (request, response) => {
  // console.log('GET REQUEST RECIEVED');
  const blogs = await Blog.find({});
  response.json(blogs);
  response.end();
});

app.post('/api/blogs', async (request, response) => {
  const blog = new Blog(request.body);

  const result = await blog.save();
  response.status(201).json(result);
  response.end();
});

module.exports = app;
