// Import Mongoose
const mongoose = require('mongoose');


// Route Handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    body: {
        type: String,
        // required: true,
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like", // Refrance to the like model
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment", // Refrance to the comment model
    }
});


// Export
module.exports = mongoose.model("Post", postSchema);