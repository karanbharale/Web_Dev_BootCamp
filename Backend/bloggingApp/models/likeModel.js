// Import Mongoose
const mongoose = require('mongoose');


// Route Handler
const likeScheme = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Refrance to the post model
    },
    user: {
        type: String,
        required: true,
    }
});


// Export
module.exports = mongoose.model("Like", likeScheme);