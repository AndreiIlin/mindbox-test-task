import { Checkbox, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectById } from '../selectors';
import { changeTodo } from '../store/todoSlice';

interface TodoItemProps {
  id: string;
}

const TodoItem: FC<TodoItemProps> = ({ id }) => {
  const todo = useAppSelector(selectById(id));
  const dispatch = useAppDispatch();
  const handleCheckboxChange = () => {
    dispatch(changeTodo(todo!.id));
  };

  return (
    <div>
      <Checkbox
        checked={todo?.completed}
        onChange={handleCheckboxChange}
        data-testid="complete-checkbox"
      />
      <Typography
        variant="overline"
        sx={todo?.completed ? { textDecoration: 'line-through' } : {}}
      >{todo?.text}</Typography>
    </div>
  );
};

export default TodoItem;
