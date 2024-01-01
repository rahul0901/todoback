import TodoModal from "../Modals/Todo.Modal.js";

export const GetTodo = async (req, res) => {
    try {

        const { getTodo } = req.body.finalGetTodo;

        if (!getTodo) {
            return res.status(404).json({ success: false, message: 'Please provide Todo item' })
        }

        const newTodo = new TodoModal({
            content: getTodo
        })

        await newTodo.save();

        return res.status(200).json({ success: true, message: 'Todo Added Successfully..', todo: newTodo })

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Get Todo api error..' })
    }
}

export const deleteTodo = async (req, res) => {

    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ success: false, message: 'Please provide a valid todo ID.' });
        }

        const deletedTodo = await TodoModal.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({ success: false, message: 'Todo not found.' });
        }

        return res.status(200).json({ success: true, message: 'Todo deleted successfully.' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error.' });
    }
};