import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const TaskForm = ({ onAddTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      onAddTask(description.trim());
      setDescription('');
    }
  };

  return (
    <section className="taskform">
      <Container>
        <form onSubmit={handleSubmit}>
          <Form.Control
            className='user-input'
            type="text"
            placeholder="Add a new task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" variant="dark">Add</Button>
        </form>
      </Container>
    </section>
  );
};

export default TaskForm;
