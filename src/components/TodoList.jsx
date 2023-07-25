import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, onToggleComplete, onDeleteTask, onEditTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
