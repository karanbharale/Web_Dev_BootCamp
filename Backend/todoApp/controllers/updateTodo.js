// import the model
const Todo = require('../models/Todo');

// Define route handler

exports.updateTodo = async (req, res) => {
    try {
        // Update todo items basis on id
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        // response

        res.status(200).json({
            success: true,
            data: todo,
            message: `Data updated successfully.`
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