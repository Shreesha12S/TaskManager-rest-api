const Task = require('../models/taskModel');

exports.createTask = (req, res) => {
    const tasks = req.body;

    // If array of tasks
    if (Array.isArray(tasks)) {
        tasks.forEach(task => {
            Task.createTask(task.title, task.description, () => {});
        });

        return res.json({ message: 'Multiple tasks created successfully' });
    }

    // Single task
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    Task.createTask(title, description, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: 'Task created successfully',
            taskId: result.insertId
        });
    });
};

exports.getAllTasks = (req, res) => {
    Task.getAllTasks((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(results);
    });
};

exports.updateTaskStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    Task.updateTaskStatus(id, status, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: 'Task status updated' });
    });
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;

    Task.deleteTask(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: 'Task deleted successfully' });
    });
};