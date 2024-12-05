import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./Sidebar.css"


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
    const [activeMenu, setActiveMenu]= useState("Home")
    const handleMenuChange = (item)=>{
        setActiveMenu(item.name)
    }
    const handleLogout =()=>{
        console.log("handle logout")
    }
return (
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
)
}

export default Sidebar
