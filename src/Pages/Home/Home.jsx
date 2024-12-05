import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TaskList from '../TaskList/TaskList'

function Home() {
return (
<div className='px-5 lg:flex ld:px-20 pt-[2.9vh]'>
    <div className='hidden lg:block w-[25vw] relative'>
    <Sidebar/>
    </div>
    <div className='flex justify-center w-full mb-10 right-side-part'>
    <TaskList/>
    </div>
</div>
}

export default Home
