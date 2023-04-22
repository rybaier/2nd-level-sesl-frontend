import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom'
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


export const Dashboard = () => {
    const [userTasks, SetUserTasks] = useState(null)
    // just to see which user is logged in
    const [user,setUser] = useState(localStorage.getItem('user')) 
    const navigate = useNavigate()
    const onHandle =()=>{
     localStorage.clear()
     
    navigate('/')
    
    }
    


    const fetchTasks = async () => {
        const token = 'Bearer ' + localStorage.getItem('token')
        console.log(token)
        const baseUrl = 'https://backendfortasktracker.herokuapp.com/'
        const headers = { 
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `${token}`
      }
      console.log(headers)
        await axios({
          method: 'GET',
          url: `${baseUrl}tasks`,
          headers: headers
          })
          .then (response => SetUserTasks(response.data))
          .then(console.log(userTasks))
          .catch(console.error)
        }
  useEffect(()=>{
    fetchTasks()
  },[])

  if( userTasks === null ) {
    return (
      <div>
         <h1>Welcome {user}</h1>
           <button onClick={onHandle}>Log out</button>
          <TaskForm />
        <h1>LOADING TASKS...if message persists refresh tasks or add task</h1>
         <button onClick={() => fetchTasks()}>Refresh Tasks</button>
      </div>
    )
  }
  return (
    <div className="container">
      <h1>Welcome {user}</h1>
      <button onClick={onHandle}>Log out</button>
      <TaskForm />
      {userTasks.map((task)=> {
        console.log(task)
        return(
          <TaskList key= {task._id} id={task._id} title={task.title} description={task.description} status={task.status} dueDate={task.dueDate}/>
        )
      })}
      <button onClick={() => fetchTasks()}>Refresh Tasks</button>
    </div>
  );
};
