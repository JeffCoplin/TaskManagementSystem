import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ onAddTask, onEditTask, taskToEdit }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskTitle(taskToEdit.text); 
      setDueDate(taskToEdit.dueDate || ''); 
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.trim() === '') {
      alert('Task title cannot be empty.');
      return;
    }

    if (dueDate.trim() === '') {
      alert('Please select a due date.');
      return;
    }

    if (taskToEdit) {
      
      onEditTask(taskToEdit.id, taskTitle, dueDate);
    } else {
     
      onAddTask(taskTitle, dueDate);
    }

    setTaskTitle(''); 
    setDueDate('');   
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task title..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)} 
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)} 
        required
      />
      <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;

