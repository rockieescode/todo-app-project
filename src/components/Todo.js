import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle, faCheckSquare, faCircle, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {EditTodoForm} from "./EditTodoForm";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo, finishTodo}) => {
    if (!task) {
        return null;
    }
    return (
        <div className='Todo'>
            <div className={'task-display'}>
                {task.isCompleted ?
                    <FontAwesomeIcon className={'p-10'} icon={faCheckCircle} onClick={() => {finishTodo(task.id)}} /> :
                    <FontAwesomeIcon className={'p-10'} icon={faCircle} onClick={() => {finishTodo(task.id)}} />
                }
                <p onClick={() => toggleComplete(task.id)}
                   className={`pt-6 ${task.isCompleted ? 'completed': ''}`} > {task.task} </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPenToSquare}
                                 onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash}
                                 onClick={() => deleteTodo(task.id) }/>

            </div>
        </div>
    )
}
