import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Task = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleEditTask = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription && newDescription.trim() !== '') {
      onEditTask(task.id, newDescription.trim());
    }
  };

  return (
    <Container>
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <Row className='w-100'>
          <Col lg={10} className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleComplete}
            />
            <div className="checkbox-user" onClick={handleEditTask}>{task.description}</div>
          </Col>
          <Col lg={2}>
            <Button variant="dark" onClick={handleDeleteTask}>Delete</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Task;
