import React, { useState} from "react";
import axios from "axios";

const TaskList = (props) => {
//  const [data, SetData ] = useState(null)
//  const [userTasks, SetUserTasks] = useState(null)
const [title, setTitle] = useState("");
  const [descript, setDescription] = useState("");
  const [status, SetStatus] = useState("pending");
  const [date, SetDate] = useState("");
  const [user, SetUser] = useState(localStorage.getItem("user"));

  let updatedTask = {
    title: title,
    description: descript,
    status: status,
    dueDate: date,
    user: user,
  };

 const deleteTask = async (event) => {
    const token = 'Bearer ' + localStorage.getItem('token')
    console.log(token)
    const baseUrl = `https://backendfortasktracker.herokuapp.com/tasks/${props.id}`
    const headers = { 
   
    'Authorization' : `${token}`
  }
  console.log(headers)
    await axios({
        method: 'DELETE',
        url: baseUrl,
        data: updatedTask,
        headers: headers
    })
    .then(res => console.log(res))
    setTimeout(()=> {
        window.location.reload(false)
      }, 1000)
 }

 const updateTask = async (event) => {
    const token = 'Bearer ' + localStorage.getItem('token')
    console.log(token)
    const baseUrl = `https://backendfortasktracker.herokuapp.com/tasks/${props.id}`
    const headers = { 
   
    'Authorization' : `${token}`
  }
  console.log(headers)
    await axios({
        method: 'PUT',
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
            <h1>{props.dueDate.split('T')[0]}</h1>
            <div>
            <button style={{width:'50px', height:'50px', backgroundColor:'#616515', margin:'10px'}}onClick={()=>{deleteTask()}}>Delete Task</button>
            <button style={{width:'50px', height:'50px', backgroundColor:'#543434', margin: '10px'}}onClick={()=>{updateTask()}}>Update Task</button>
            </div>
           
        </div>
    )
}

export default TaskList