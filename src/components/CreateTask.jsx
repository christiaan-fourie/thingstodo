function CreateTask({tasks, setTasks, setTaskTitle, taskTitle, setTaskContent, taskContent}) {
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle || !taskContent) {
        // Show an error message
        alert("Please fill in both the title and content fields");
        return;
    }
    setTasks([...tasks, {text: taskTitle, content: taskContent, completed: false}]);
    setTaskTitle("");
    setTaskContent("");
  }; 
  
  return (
        <div className="p-4 py-10 border-solid border-2 border-sky-500 rounded-xl">
            <h1 className="text-2xl font-bold mb-4">Create Task</h1>
            <form onSubmit={handleAddTask} className="flex flex-col items-center">
              <div className="flex items-center">
                <input
                  onChange={(e) => setTaskTitle(e.target.value)}
                  value={taskTitle} 
                  type="text" 
                  className="border-solid border-2 text-sky-500 border-sky-500 p-2 mr-2 pl-8 rounded-full" 
                />
                <button className="bg-blue-500 text-white p-2" type="submit">Add</button>
              </div>
              <input 
                onChange={(e) => setTaskContent(e.target.value)} 
                value={taskContent} 
                type="text" 
                className="border-solid border-2 text-sky-500 border-sky-500 w-full pl-8 rounded-full p-2 mt-2" 
              />
            </form>
          </div>
    );
};

export default CreateTask;