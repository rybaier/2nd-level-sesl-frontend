import React, { useState} from "react";
import axios from "axios";

const TaskList = (props) => {
//  const [data, SetData ] = useState(null)
//  const [userTasks, SetUserTasks] = useState(null)

 const deleteTask = async (event) => {
    const token = 'Bearer ' + localStorage.getItem('token')
    console.log(token)
    const baseUrl = `https://backendfortasktracker.herokuapp.com/tasks/${props.id}`
    const headers = { 
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Authorization' : `${token}`
  }
  console.log(headers)
    event.preventDefault()
    await axios({
        method: 'DELETE',
        url: baseUrl,
        data: null,
        headers: headers
    })
    .then(res => console.log(res))
    setTimeout(()=> {
        window.location.reload(false)
      }, 1000)
 }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <h1> {props.description}</h1>
            <h1>{props.status}</h1>
            <h1>{props.dueDate}</h1>
            <button onClick={()=>{console.log('test')}}>Test</button>

           
        </div>
    )
}

export default TaskList