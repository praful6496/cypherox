import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoList from './components/TodoList';
import TaskForm from './components/TaskForm';
import { Button, Container, Navbar } from 'react-bootstrap';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleAddTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, completed: !selectAll }))
    );
  };

  const handleDeleteSelected = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <>
      <Navbar className="header-name" bg="dark" data-bs-theme="dark">
        <Navbar.Brand>Todo List App</Navbar.Brand>
      </Navbar>
      <Container>
        <TaskForm onAddTask={handleAddTask} />
        <TodoList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
        <div className="action-buttons">
          <Button variant="danger" className="me-2" onClick={handleDeleteSelected}>
            Delete Selected
          </Button>
          <Button variant="primary" className="me-2" onClick={handleSelectAll}>
            {selectAll ? 'Unselect All' : 'Select All'}
          </Button>
          <Button variant="success" onClick={() => setTasks([])}>
            Delete All
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
