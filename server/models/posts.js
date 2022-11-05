const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'post title is required'],
        minlength: [3, 'post title must be atleast 3 characters']
    },
    date: {
        type: String,
        required: [true, 'post date is required']
    },
    image: {
        type: String,
        required: [true, 'post image is required']
    }
});

const Post = model('Posts', postsSchema);
module.exports = Post;
