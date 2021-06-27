import React, {useState} from 'react'
import { v4 as uuidv4 } from "uuid";

function Dashboard() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [showTask, setShowTask] = useState({
      display: false,
      title: "Show Container",
    });

    const handleChange = (e)=> {
        setTask(e.target.value);
    }

    const Add = (e) => {
        if(task!=="") {
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value:task,
                isCompleted: false
            }
            setTaskList([...taskList, taskDetails]);
            setTask('')
        }
    }
    
    const deleteTask = (e, id) => {
      
       setTaskList(taskList.filter((item)=>item.id !== id))
    }


   const showTaskHandler = () => {
    setShowTask({
      display: !showTask.display,
      title: showTask.display ? "Show Container" : "Hide Container",
    });
   }

    return (
      <div>
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          Your Dashbord is Right Here
        </p>
        <button
          style={{ display: "block", margin: "0 auto", width: "150px", height:"50px" }}
          onClick={showTaskHandler}
        >
          {showTask.title}
        </button>
        {showTask.display && (
          <div>
            <div style={{ textAlign: "center" }}>
              <input
                onChange={(e) => handleChange(e)}
                style={{
                  padding: "6px",
                  fontSize: "25px",
                  margin: "30px 10px",
                }}
                value={task}
                type="text"
                name="text"
                id="text"
                placeholder="Your text here"
                size="40"
              ></input>
              <button
                style={{
                  padding: "6px",
                  fontSize: "25px",
                  width: "50px",
                  marginLeft: "10px",
                }}
                onClick={Add}
              >
                +
              </button>
            </div>
            {taskList !== [] ? (
              <ul style={{ listStyle: "none", textAlign: "center" }}>
                {taskList.map((item) => (
                  <li key={uuidv4()} style={{ padding: "8px" }}>
                    {item.value}
                    <button style={{marginLeft:"10px"}} onClick={(e) => deleteTask(e, item.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    );
}

export default Dashboard
