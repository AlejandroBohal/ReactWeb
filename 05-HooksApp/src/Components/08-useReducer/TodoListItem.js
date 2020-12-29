import React from 'react'

export const TodoListItem = ({todo,index:i,handleToggle,handleDelete}) => {
    const  {id,done,description} = todo;
    return (
        <li className='list-group-item'>
            <p className={`${done && 'complete'}`} 
                onClick={() => handleToggle(id)}> 
                {i+1} {description}
            </p>
            <button className='btn btn-danger' 
                    onClick={() => handleDelete(id)}>
                Delete
            </button>
        </li>
    );
};
