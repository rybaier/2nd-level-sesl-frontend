import React, { useState } from "react";
import moonicon from "../assets/images/icon-moon.svg";
import Inputfield from "./inpufield";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const TaskForm = (props) => {
    const [zoomIn, setZoom] = useState(false);

    const [title, setTitle] = useState("");
    const [descript, setDescription] = useState("");
    const [status, SetStatus] = useState('pending');
    const [date, SetDate] = useState('')
    const [user, SetUser] = useState(localStorage.getItem('user'))

    let newTask = {
        title: title,
        description: descript,
        status: status,
        dueDate: date,
        user: user
    }
    console.log(newTask)
    const addTask = async (event) => {
        const token = 'Bearer ' + localStorage.getItem('token')
        console.log(token)
        const baseUrl = `https://backendfortasktracker.herokuapp.com/tasks`
        const headers = { 
       
        'Authorization' : `${token}`
      }
      console.log(headers)
        await axios({
            method: 'POST',
            url: baseUrl,
            data: newTask,
            headers: headers
        })
        .then(res => console.log(res))
        setTimeout(()=> {
            window.location.reload(false)
          }, 1000)
     }

    return (
        
        <div className="tasks">
          <div className="tasksheader">
            <h1>My Tasks</h1>
            <img src={moonicon} alt="theme mode img" />
          </div>
          {/* <Inputfield
            title={props.title}
            titleValue={title}
            handleTitleEdit={(e) => {
              setTitle(e.target.value);
              console.log(e.target.value);
            }}
            contentValue={descript}
            changeContent={(e) => {
              console.log(e.target.value);
              setDescription(e.target.value);
            }}
            description={props.description}
            /> */}
 
    <div className="inputfieldcomponent">
      <form className="create-note" >
        <input
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          className="title"
          name="title"
          placeholder="Create New Task"
        />
        <textarea
          onClick={() => setZoom(!zoomIn)}
          name="description"
          onChange={(event) => {
            setDescription(event.target.value)
          }}
          placeholder="Enter Description..."
          rows={zoomIn ? "4" : "1"}
        />
         <input type= {"date"} onChange={(event) => {
                SetDate(event.target.value)
            }}/>
        <p>
          <strong>Set Due Date</strong>
        </p>
        

        <Zoom in={zoomIn && true}>
          <Fab type="submit" onClick={() => {addTask()}}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  
        </div>
    )
}

export default TaskForm