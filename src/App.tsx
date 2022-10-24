import React, {useState} from 'react';
import './App.css';
import {FilterType, TasksPropsType, Todolist} from "./Todolist";

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

    const [filter, setFilter] = useState<FilterType>('All')
    const changeFilter = (filterStatus: FilterType) => {
        setFilter(filterStatus)
    }

    let tasksForTodolist = tasks

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter((el) => !el.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter((el) => el.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasksForTodolist}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;