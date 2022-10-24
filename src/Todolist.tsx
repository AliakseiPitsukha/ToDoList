import React from "react";

export type FilterType = 'All' | 'Active' | 'Completed'


export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}
export type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    deleteTask: (id: number) => void
    changeFilter: (filterStatus: FilterType) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const onClickHandler = (filterStatus: FilterType) => {
        props.changeFilter(filterStatus)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                        return (
                            <li key={el.id}>
                                <input type={'checkbox'} checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={()=>{props.deleteTask(el.id)}}>x</button>
                            </li>
                        )
                    }
                )}
            </ul>
            <div>
                <button onClick={()=>{onClickHandler('All')}}>All</button>
                <button onClick={()=>{onClickHandler('Active')}}>Active</button>
                <button onClick={()=>{onClickHandler('Completed')}}>Completed</button>
            </div>
        </div>
    )
}