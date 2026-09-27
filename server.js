const logger = require("./middleware/logger");

const express = require("express");

const app = express();

const PORT = 3000;

const taskRoutes = require("./routes/taskroutes");

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
    res.send("TASKFLOW API çalışıyor!");
});

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});