import React, { useState } from 'react';
import TaskForm from './TaskForm';
import '../styles/Kanbanboard.css';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskText, dueDate) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      status: 'To Do',
      dueDate,
    };
    setTasks([...tasks, newTask]); // Agregar nueva tarea sin sobrescribir las existentes
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText, newDueDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, text: newText, dueDate: newDueDate }
          : task
      )
    );
    setEditingTask(null); // Restablecer el formulario después de la edición
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div>
      <TaskForm
        onAddTask={addTask}
        onEditTask={editTask}
        taskToEdit={editingTask}
      />

      <div className="kanban-column">
        <h3>To Do</h3>
        <ul>
          {tasks
            .filter((task) => task.status === 'To Do')
            .map((task) => (
              <li key={task.id} className="kanban-task">
                <span className="task-text">{task.text}</span>
                <span className="task-due-date"> Due: {task.dueDate || 'No date'}</span>
                <button onClick={() => moveTask(task.id, 'In Progress')}>In Progress</button>
                <button onClick={() => moveTask(task.id, 'Done')}>Done</button>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>

      <div className="kanban-column">
        <h3>In Progress</h3>
        <ul>
          {tasks
            .filter((task) => task.status === 'In Progress')
            .map((task) => (
              <li key={task.id} className="kanban-task">
                <span className="task-text">{task.text}</span>
                <span className="task-due-date"> Due: {task.dueDate || 'No date'}</span>
                <button onClick={() => moveTask(task.id, 'To Do')}>To Do</button>
                <button onClick={() => moveTask(task.id, 'Done')}>Done</button>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>

      <div className="kanban-column">
        <h3>Done</h3>
        <ul>
          {tasks
            .filter((task) => task.status === 'Done')
            .map((task) => (
              <li key={task.id} className="kanban-task">
                <span className="task-text">{task.text}</span>
                <span className="task-due-date"> Due: {task.dueDate || 'No date'}</span>
                <button onClick={() => moveTask(task.id, 'To Do')}>To Do</button>
                <button onClick={() => moveTask(task.id, 'In Progress')}>In Progress</button>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default KanbanBoard;


