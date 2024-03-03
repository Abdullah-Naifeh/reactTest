import React from 'react'

function categoryCard({skillTitle , skillRate, skillNumber}) {
  return (
    <div className='flex flex-col bg-[#8FC1E8] py-5 px-4 w-[305px] h-[138px] rounded-md font-semibold'>
        <h1 className='text-[24px]'>{skillTitle}</h1>
        <div className='flex justify-between mt-4 font-semibold'>
            <div>★ {skillRate}/5</div>
            <p>{skillNumber} skills</p>
        </div>
    </div>
  )
}

export default categoryCard