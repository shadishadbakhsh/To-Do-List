import React,{useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])}
        setNewTask('');
        
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter(
            (Element, i) => i !== index
        );
        setTasks(updatedTasks);
    }

    function moveUpTask(index){

        if(index !== 0){
            const updatedTask = [...tasks];
            [updatedTask[index-1],updatedTask[index]] = [updatedTask[index],updatedTask[index-1]]
            setTasks(updatedTask);
        }

    }

    function moveDowntask(index){

        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index +1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }



    return(
    <div className="to-do-list">
        <h1>To Do List</h1>
        <div className="input-todolist">
            <input type="text" 
            placeholder="Enter The Task..." 
            onChange={handleChange}
            value={newTask}/>
            <button onClick={addTask} 
            className="add-button">Add</button>
        </div>
        <ol className="tasks-list">
            {tasks.map((task, index) => 
                <li key={index} className="tasks-item">
                    <span>{task}</span>
                    <div className="buttons">
                        <button onClick={()=>deleteTask(index)}
                        className="delete-button">Delete</button>
                        <button onClick={()=>moveUpTask(index)} 
                        className="move-button">Up</button>
                        <button onClick={()=>moveDowntask(index)} 
                        className="move-button">Down</button>
                    </div>
                </li>
            )}    
        </ol> 
    </div>)
}

export default ToDoList