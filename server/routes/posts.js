const express = require('express');

const { getPosts, addPost, getPost, deletePost, updatePost } = require('../controllers/posts');
const upload = require('../middlewares/uploadFile');

const postsRoute = express();

// for parsing json and form data from the request body
postsRoute.use(express.json());
postsRoute.use(express.urlencoded({ extended: true }));
postsRoute.use(express.static('public'));

postsRoute.get('/', getPosts);
postsRoute.get('/:id', getPost);
postsRoute.post('/', upload, addPost);
postsRoute.put('/', upload, updatePost);
postsRoute.delete('/:id', deletePost);

postsRoute.use('*', (req, res) => {
  res.send('Not a valid route');
});

module.exports = postsRoute;
