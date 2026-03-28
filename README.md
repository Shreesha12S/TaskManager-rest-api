# Task Management REST API

## Overview

This is a Simple Task Management REST API built using Node.js, Express.js, and MySQL.
The API allows users to create, retrieve, update, and delete tasks. The application follows a basic MVC architecture where routes handle endpoints, controllers handle logic, models interact with the database, and MySQL stores the data.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* mysql2
* CORS
* dotenv
* curl (for API testing)

---

## Features

The API supports the following operations:

1. Create Task
2. Get All Tasks
3. Update Task Status
4. Delete Task
5. Bulk Task Creation (multiple tasks at once)

Each task contains the following fields:

* id
* title
* description
* status
* created_at

---

## Project Structure

```
task-manager-api
│
├── config
│      db.js
├── controllers
│      taskController.js
├── routes
│      taskRoutes.js
├── models
│      taskModel.js
├── app.js
├── database_schema.sql
├── curl_commands.txt
├── task.json
├── update.json
├── README.md
└── package.json
```

---

## Database Setup

Open MySQL Workbench and run the following SQL:

```sql
CREATE DATABASE taskdb;

USE taskdb;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Installation and Setup

1. Clone the repository:

```
git clone https://github.com/Shreesha12S/TaskManager-rest-api
cd task-manager-api
```

2. Install dependencies:

```
npm install
```

3. Configure database in `config/db.js`:

```
host: 'localhost'
user: 'root'
password: 'your_password'
database: 'taskdb'
```

4. Start the server:

```
node app.js
```

Server will run on:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /api/tasks     | Create a new task  |
| GET    | /api/tasks     | Get all tasks      |
| PUT    | /api/tasks/:id | Update task status |
| DELETE | /api/tasks/:id | Delete a task      |

---

## Example Curl Commands

### Create Task

```
curl.exe -X POST http://localhost:5000/api/tasks -H "Content-Type: application/json" --data-binary "@task.json"
```

### Get All Tasks

```
curl.exe http://localhost:5000/api/tasks
```

### Update Task Status

```
curl.exe -X PUT http://localhost:5000/api/tasks/1 -H "Content-Type: application/json" --data-binary "@update.json"
```

### Delete Task

```
curl.exe -X DELETE http://localhost:5000/api/tasks/1
```

---

## Architecture

This project follows MVC architecture:

Client → Routes → Controller → Model → Database → Response

* Routes handle API endpoints
* Controllers handle business logic
* Models interact with MySQL database
* Database stores task data

---

## Deliverables Included

* GitHub Repository
* README.md
* curl_commands.txt
* database_schema.sql
* Source Code
* MySQL Database Schema

---
