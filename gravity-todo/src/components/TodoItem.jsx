import React from 'react'

function TodoItem({todo, completed, onComplete, onDelete}) {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {/* Checkbox */}
            <input
                type="checkbox"
                className="mr-2 align-middle"
                checked={completed}
                onChange={onComplete}
            />

            {/* Todo text */}
            <span className={completed ? 'text-decoration-line-through' : ''}>
                {todo}
            </span>

            {/* Close button */}
            <button type="button" onClick={onDelete} className="close ml-auto" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default TodoItem