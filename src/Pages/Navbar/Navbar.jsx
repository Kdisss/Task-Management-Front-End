import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
return (
    <div className='navbar w-full z-10 sticky left-0 right-0 top-0 py-3 px-10
    lg:px-10, flex justify-between items-center'>
        
        <p className='text-lg font-bold'>Project Management App</p>

        <div className='flex items-center gap-5'>
            <p>KKD</p>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0a9Vv--jOowQtVo_DNHzY7CvSizocuT8pA&s'></Avatar>
        </div>

    </div>
)
}

export default Navbar
