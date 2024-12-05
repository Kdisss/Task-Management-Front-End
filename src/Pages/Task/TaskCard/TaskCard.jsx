import React from 'react'

const TaskCard = () => {
  return (
    <div className='justify-between card lg:flex'>
        <div className='items-center gap-5 space-y-2 lg:flex w-[90%] lg:w-[70%]'>
            <div className=''>
            <img className='lg:w-[7rem] lg:h-[rem] object-cover' 
            src='https://www.nismo.co.jp/en/products/customerracing/img/top/img_gt3_01.jpg'></img>
            </div>

            <div className='space-y-5'>
                <div className='space-y-2'>
                    <h1 className='text-lg font-bold'>Car Rental Website</h1>
                    <p className='text-sm text-gray-500'>use latest frameworks and technology to make this website</p>
                    
                </div>
                <div className='flex-wrap items-center gap-2'>
                    {[1,1,1,1].map((item)=><span className='px-5 py-1 rounded-full techStack'>
                        Angular
                    </span>)}
                    
                </div>
                
            </div>
        </div>
        
      
    </div>
  )
}

export default TaskCard
