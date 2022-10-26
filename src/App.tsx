import React, {useState} from 'react';
import './App.css';
import {FilterType, TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

function App() {

    const [tasks, setTasks] = useState<TasksPropsType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest api', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ])

    const addTask = (taskTitle: string) => {
        setTasks([{id: v1(), title: taskTitle, isDone: false},...tasks])
    }
    const deleteTask = (taskID: string) => {
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
                title = {'What to learn'}
                tasks = {tasksForTodolist}
                addTask = {addTask}
                deleteTask = {deleteTask}
                changeFilter = {changeFilter}
            />
        </div>
    );
}

export default App;