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
    changeTaskStatus: (taskID: string, newIsDoneStatus: boolean) => void
    filterCurrentStatus: FilterType
}

export const Todolist = (props: TodolistPropsType) => {
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const onClickHandlerAddTask = () => {
        if (text.trim() !== '') {
            props.addTask(text.trim())
            setText('')
        } else {
            setError('Title is required')
        }
    }
    const onKeyDownHandlerAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            if (text.trim()) {
                props.addTask(text.trim())
                setText('')
            } else {
                setError('Title is required')
            }
        }
    }

    const onChangeTaskHandler = (taskID: string, e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(taskID, e.currentTarget.checked)
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
                    className={error ? 'error' : ''}
                />
                <button
                    onClick={onClickHandlerAddTask}>+
                </button>
                {error && <div className={'errorMessage'}>{error}</div>}
            </div>
            <ul>
                {props.tasks.map((el) => {
                        return (
                            <li
                                key={el.id}
                                className={el.isDone ? 'isDone' : ''}
                            >
                                <input type={'checkbox'}
                                       checked={el.isDone}
                                       onChange={(event) => {
                                           onChangeTaskHandler(el.id, event)
                                       }}
                                />
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
                <button
                    className={props.filterCurrentStatus === 'All' ? 'activeFilter' : ''}
                    onClick={() => {
                        onClickHandlerFilter('All')
                    }}>All
                </button>
                <button
                    className={props.filterCurrentStatus === 'Active' ? 'activeFilter' : ''}
                    onClick={() => {
                        onClickHandlerFilter('Active')
                    }}>Active
                </button>
                <button
                    className={props.filterCurrentStatus === 'Completed' ? 'activeFilter' : ''}
                    onClick={() => {
                        onClickHandlerFilter('Completed')
                    }}>Completed
                </button>
            </div>
        </div>
    )
}