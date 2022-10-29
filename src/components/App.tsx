import { Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import InputSection from './InputSection';
import TodoList from './TodoList';

const App: FC = () => {
  return (
    <Container>
      <Typography sx={{ mt: 3 }} variant="h2" align="center">Todo list</Typography>
      <InputSection />
      <TodoList />
    </Container>
  );
};

export default App;
