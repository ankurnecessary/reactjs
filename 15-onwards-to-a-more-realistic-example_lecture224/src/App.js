import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      { url: 'https://react-http-1b987-default-rtdb.firebaseio.com/tasks.json' }
      , transformTasks
    );
  }, [fetchTasks, transformTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={transformTasks}
      />
    </React.Fragment>
  );
}

export default App;
