import { useState } from "react";

function TaskList ({tasks, setTasks}) {
    
    const [activeAccordion, setActiveAccordion] = useState(-1);

    const handleAccordionClick = (index) => {
        setActiveAccordion(index === activeAccordion ? -1 : index);
    };

    const handleCompleteTask = index => {
        setTasks(
          tasks.map((task, i) => {
            if (index === i) {
              return {
                ...task,
                completed: !task.completed
              };
            }
            return task;
          })
        );
      };

    return (
        <div className="p-4">            
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <div className="accordion">
              {tasks.map((task, index) => (
                <div className='mb-6'>
                  <div key={index} className={`flex items-center cursor-pointer bg-blue-800 pr-10 rounded-2xl`} onClick={() => handleAccordionClick(index)}>
                    <h2 className="w-full text-lg py-2">{task.text}</h2>
                    <i className="fas fa-angle-down ml-auto"></i>
                  </div>
                  <div className={`content ${activeAccordion === index ? 'bg-blue-600 mt-2 rounded-2xl' : 'hidden'} p-4`}>
                    <p>
                      {task.content}
                      <button onClick={() => handleCompleteTask(index)}>
                        {task.completed ? "Undo" : "Complete"}
                      </button>
                    </p>
                </div>
                </div>      
              ))}              
            </div>
        </div>
    );
};

export default TaskList;