import React, { useState} from "react";


const TaskList = (props) => {
 const [data, SetData ] = useState(null)
 const [userTasks, SetUserTasks] = useState(null)
 

    return (
        <div>
            <h1>{props.title}</h1>
            <h1> {props.description}</h1>
            <h1>{props.status}</h1>
            <h1>{props.dueDate}</h1>
            <button onClick={()=>{console.log('test')}}>Test</button>

           
        </div>
    )
}

export default TaskList