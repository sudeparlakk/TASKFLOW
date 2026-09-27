const fs = require("fs");
const path = require("path");

const tasksFile = path.join(__dirname, "../data/tasks.json");

// Görevleri dosyadan okuma
function getTasks() {
    const data = fs.readFileSync(tasksFile, "utf-8");
    return JSON.parse(data);
}

// Görevleri dosyaya kaydetme
function saveTasks(tasks) {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// GET /tasks
const getAllTasks = (req, res) => {
    const tasks = getTasks();
    res.json(tasks);
};

// GET /tasks/:id
const getTaskById = (req, res) => {
    const tasks = getTasks();

    const task = tasks.find(
        task => task.id === Number(req.params.id)
    );

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    res.json(task);
};

// POST /tasks
const createTask = (req, res) => {
    const tasks = getTasks();

    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        assignee: req.body.assignee,
        status: "pending"
    };

    tasks.push(newTask);
    saveTasks(tasks);

    res.status(201).json(newTask);
};

// PUT /tasks/:id
const updateTask = (req, res) => {
    const tasks = getTasks();

    const index = tasks.findIndex(
        task => task.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    tasks[index] = {
        ...tasks[index],
        ...req.body
    };

    saveTasks(tasks);

    res.json(tasks[index]);
};

// DELETE /tasks/:id
const deleteTask = (req, res) => {
    const tasks = getTasks();

    const index = tasks.findIndex(
        task => task.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Görev bulunamadı"
        });
    }

    const deletedTask = tasks.splice(index, 1)[0];

    saveTasks(tasks);

    res.json({
        message: "Görev başarıyla silindi",
        task: deletedTask
    });
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};