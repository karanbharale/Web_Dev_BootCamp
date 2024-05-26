// import the model
const Todo = require('../models/Todo');

// Define route handler

exports.getTodo = async (req, res) => {
    try {
        // Fetch all todo items from detabase
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entire Todo Data is fetched.'
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


exports.getTodoById = async (req, res) => {
    try {
        // Extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        // response
        // Data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with given ID."
            })
        }
        // Data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched.`
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
