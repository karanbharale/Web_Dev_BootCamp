// Import Model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business Logic

exports.createComment = async (req, res) => {
    try {
        // Fetch data form request body
        const { post, user, body } = req.body;
        // Create a comment Object
        const comment = new Comment({
            post, user, body
        });

        // Save the new comment in the database
        const savedComment = await comment.save();

        // Find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments") //populates the comments array with comment document
            .exec();
        res.json({
            post: updatedPost,
        });
    } catch (error) {
        return res.statu(500).json({
            error: "Error While creating Comment.",
        });
    }
};