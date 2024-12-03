const express = require('express');
const router = express.Router();

let tasks = []; 


router.post('/create', (req, res) => {
  const { title, status } = req.body;
  const newTask = { id: tasks.length + 1, title, status: status || 'To Do' };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = tasks.find(task => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = title || task.title;
  task.status = status || task.status;
  res.status(200).json(task);
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.status(200).json({ message: 'Task deleted' });
});

module.exports = router;
