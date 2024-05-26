// Import Mongoose
const mongoose = require('mongoose');


// Route Handler
const connectSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Refrance to the post model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});


// Export
module.exports = mongoose.model("Comment", connectSchema);