import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormsTask = () => {
    const [newTask, setNewTask] = useState('')
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks);

    const handleAddTask = () => {
        const task = { id: Date.now(), text: newTask}
        dispatch({ type: 'tasks/addTaskAsync', payload: task})
        setNewTask('')
    }
    
    const handleDeleteTask = (taskId) => {
        dispatch({ type: 'tasks/deleteTaskAsync', payload: taskId })
    }

    return (
        <div className="">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default FormsTask;