// import the model
const Todo = require('../models/Todo');

// Define route handler

exports.deleteTodo = async (req, res) => {
    try {
        // Delete todo items basis on id
        const { id } = req.params;
        const { title, description } = req.body;

         await Todo.findByIdAndDelete(id);

        // response

        res.json({
            success: true,
            message: "Data DELETED successfully."
        });

    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(200).json(
            {
                success: false,
                data: 'Internal server error.',
                message: err.message
            }
        );
    }
}