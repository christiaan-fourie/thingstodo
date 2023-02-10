import './App.css';
import { useState } from 'react';

import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';


function App() {

  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");

  
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-6xl color underline font-thin mb-14 font-Poppins text-palette-prim">ThingsToDo</h1>
        <div className="flex-row w-4/5 p-4">
          <CreateTask 
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskContent={taskContent}
            setTaskContent={setTaskContent}
            tasks={tasks}
            setTasks={setTasks}
          />
          <TaskList tasks={tasks} setTasks={setTasks}/>          
        </div>
      </header>
    </div>
  );
}

export default App;
