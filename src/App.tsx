import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

function App() {

    const [tasks, setTasks] = useState<TasksPropsType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest api', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ])

    const deleteTask = (taskID: number) => {
        setTasks(tasks.filter((el) => el.id !== taskID))
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;