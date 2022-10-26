import React, {ChangeEvent, KeyboardEvent, useState} from "react";

export type FilterType = 'All' | 'Active' | 'Completed'


export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    addTask: (taskTitle: string) => void
    deleteTask: (id: string) => void
    changeFilter: (filterStatus: FilterType) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [text, setText] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const onClickHandlerAddTask = () => {
        props.addTask(text)
        setText('')
    }
    const onKeyDownHandlerAddTask = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(text)
            setText('')
        }
    }


    const onClickHandlerFilter = (filterStatus: FilterType) => {
        props.changeFilter(filterStatus)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={text}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandlerAddTask}
                />
                <button
                    onClick={onClickHandlerAddTask}>+
                </button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                        return (
                            <li key={el.id}>
                                <input type={'checkbox'} checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => {
                                    props.deleteTask(el.id)
                                }}>x
                                </button>
                            </li>
                        )
                    }
                )}
            </ul>
            <div>
                <button onClick={() => {
                    onClickHandlerFilter('All')
                }}>All
                </button>
                <button onClick={() => {
                    onClickHandlerFilter('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    onClickHandlerFilter('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
}