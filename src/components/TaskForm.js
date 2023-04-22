import React, { useState } from "react";
import moonicon from "../assets/images/icon-moon.svg";
import Inputfield from "./inpufield";

const TaskForm = (props) => {

    const [title, setTitle] = useState("");
    const [descript, setDescription] = useState("");


    return (
        
        <div className="tasks">
          <div className="tasksheader">
            <h1>My Tasks</h1>
            <img src={moonicon} alt="theme mode img" />
          </div>
          <Inputfield
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
            />
  
        </div>
    )
}

export default TaskForm