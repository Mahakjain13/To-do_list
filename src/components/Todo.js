import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'
const Todo = () => {
    let [task,setTask] = useState("");  //array destructuring
    let [taskArray,setTaskArray] = useState([]);
    let clickHandler=()=>{
        // console.log("Clicked");
        setTaskArray([...taskArray,task]);
        setTask(taskArray);
    }


    let onChangeHandler=(event)=>{
        console.log(event.target.value);
        setTask(event.target.value)
    }
    return ( 
        
        <>
        .<div
            class="container"
        >
            <div class="mb-3">
                <h1>Welcome to my To-Do List</h1>
            <label htmlFor="" class="form-label">Name</label><br/>
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                onChange={onChangeHandler}
        
        />
         <button onClick={clickHandler}>Add Task</button><br></br><br/>
        <ol>
        {task}
        {
            taskArray.map((elem,index)=>{
                return <li>{index+1}. {elem}</li>
            })
        }
        </ol>
        </div>

        </div>
        
        
        
       
        </>
     );
}
 
export default Todo;