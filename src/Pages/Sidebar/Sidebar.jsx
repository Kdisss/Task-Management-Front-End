import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./Sidebar.css"
import CreateNewTaskForm from '../Task/TaskCard/CreateTask';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/AuthSlice'; // Adjust the path based on your folder structure




const menu = [
    { name: "Home", value: "HOME", role: ["ROLE-ADMIN", "ROLE-CUSTOMER"] },
    { name: "Done", value: "DONE", role: ["ROLE-ADMIN", "ROLE-CUSTOMER"] },
    { name: "Assigned", value: "ASSIGNED", role: ["ROLE-ADMIN"] },
    { name: "Not Assigned", value: "PENDING", role: ["ROLE-ADMIN"] },
    { name: "Create New Project", value: "", role: ["ROLE-ADMIN"] },
    { name: "Notification", value: "NOTIFICATION", role: ["ROLE-CUSTOMER"] },
];


const role = "ROLE-ADMIN"

const Sidebar = () => {
    const dispatch = useDispatch();
    const location=useLocation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu]= useState("Home")

    const [openCreateNewTaskForm, setOpenCreateNewTaskForm] = useState(false);
    const handleCloseCreateNewTaskForm=()=>{
    setOpenCreateNewTaskForm(false);
    }
    const handleOpenCreateNewTaskForm=()=>{
        setOpenCreateNewTaskForm(true);
        
    }
    const handleMenuChange = (item)=>{

        const updatedParams=new URLSearchParams(location.search);        if(item.name=="Create New Project"){
            handleOpenCreateNewTaskForm()
            
        }
        else if(item.name=="Home"){
            updatedParams.delete("filter")
            const queryString = updatedParams.toString();
            const updatedPath = queryString?`${location.pathname}?${queryString}`
            :location.pathname;
            navigate(updatedPath);
        }
        else{
            updatedParams.set("filter",item.value);
            navigate(`${location.pathname}?${updatedParams.toString()}`)
        }
        setActiveMenu(item.name)
    }
    const handleLogout = () => {
        dispatch(logout())
        console.log("handle logout");
    };
return (
    <>
    <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
    <div className='h-full space-y-5'>
        <div className='flex justify-center'>
            <Avatar
            sx={{width:"8rem", height:"8rem"}}
            className='border-2 border-[#21207b]'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0a9Vv--jOowQtVo_DNHzY7CvSizocuT8pA&s'/>
            
        </div>
        {
            menu.filter((item)=>item.role.includes(role))
            .map((item) => <p onClick={()=>handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu===item.name?
                "activeMenuItem":"menuItem"}`}>
                {item.name}
            </p>)
        }
        <Button onClick={handleLogout} sx={{padding:".7rem", borderRadius:"2rem"}} fullWidth className='logoutButton'>
            logout
        </Button>
        
    </div>
    
</div>
<CreateNewTaskForm open={openCreateNewTaskForm} handleClose={handleCloseCreateNewTaskForm}/>
    </>

)
}

export default Sidebar
