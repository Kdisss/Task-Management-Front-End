import React, { useEffect } from "react";
import TaskCard from "../Task/TaskCard/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "src/Redux/TaskSlice";
import { useLocation } from "react-router-dom";
import { fetchUsersTasks } from "src/Redux/TaskSlice";

function TaskList() {
  const dispatch = useDispatch();
  const { task ,auth} = useSelector((store) => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterValue = queryParams.get("filter");

  useEffect(() => {
    if(auth.user?.role==="ROLE-ADMIN"){
     dispatch(fetchTasks({status:filterValue})); 
    }
    else{
      dispatch(fetchUsersTasks({status:filterValue}))
    }
    
  }, [filterValue]);

  console.log("task", task);

  return (
    <div className="w-[67vw]">
      <div className="space-y-3">
        {auth.user?.role==="ROLE-ADMIN"?task.tasks.map((item) => (
          <TaskCard item={item} />
        )):task.userTask.map((item)=>(
          <TaskCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
