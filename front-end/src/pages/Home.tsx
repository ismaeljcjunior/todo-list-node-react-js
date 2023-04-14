import { Container, List, Typography } from '@mui/material';
import { useState } from 'react';
import { Form } from '../components/Form';
import TodoItem from '../components/TodoItem';

export const Home = () => {


  return (
    <div>
      <Container maxWidth="xs" sx={{ marginTop: "1rem" }}>
        <Form />
        <List sx={{ width: "100%", bgcolor: 'Background.paper', marginTop: "1rem" }}>
          <TodoItem />
        </List>
      </Container>
    </div>
  );
};

