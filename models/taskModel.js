const db = require('../config/db');

const Task = {
    createTask: (title, description, callback) => {
        const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
        db.query(query, [title, description], callback);
    },

    getAllTasks: (callback) => {
        const query = 'SELECT * FROM tasks';
        db.query(query, callback);
    },

    updateTaskStatus: (id, status, callback) => {
        const query = 'UPDATE tasks SET status = ? WHERE id = ?';
        db.query(query, [status, id], callback);
    },

    deleteTask: (id, callback) => {
        const query = 'DELETE FROM tasks WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Task;