import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { FC } from 'react';
import { useAppSelector } from '../hooks';
import { activeTodos, completedTodos, todos } from '../selectors';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const allTodos = useAppSelector(todos);
  const needToDo = useAppSelector(activeTodos);
  const done = useAppSelector(completedTodos);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All todos" value="1" />
            <Tab label="Active todos" value="2" />
            <Tab label="Completed todos" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{ px: 0 }} value="1" data-testid="tab-with-all">
          {allTodos.map(({ id }) => <TodoItem id={id} key={id} />)}
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="2" data-testid="tab-with-active">
          {needToDo.map(({ id }) => <TodoItem id={id} key={id} />)}
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="3" data-testid="tab-with-completed">
          {done.map(({ id }) => <TodoItem id={id} key={id} />)}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TodoList;
