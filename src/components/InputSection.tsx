import { Box, Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTodo } from '../store/todoSlice';

const InputSection: FC = () => {
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  };
  return (
    <Box
      component="form"
      onSubmit={handleAddTodo}
      sx={{ my: 3, display: 'flex', alignContent: 'center' }}
      data-testid="form"
    >
      <TextField
        variant="outlined"
        label="New todo"
        size="small"
        value={todoText}
        onChange={handleInputChange}
        inputProps={{ 'data-testid': 'input' }}
      />
      <Button
        type="submit"
        disabled={!todoText}
        data-testid="button"
      >
        Add new todo
      </Button>
    </Box>
  );
};

export default InputSection;
