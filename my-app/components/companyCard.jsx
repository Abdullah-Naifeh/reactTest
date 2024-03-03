import React from 'react'
import CompanyImage from "@/images/companyImg.png"
import Image from 'next/image'

function companyCard({companyTitle , companyRatio, tasksNumber, skills}) {
  return (
<div className='flex flex-col w-[305px] items-center'>
    <div><Image src={CompanyImage} width={80} height={103} alt="Company Image" /></div>
    <div className='border-t-2 border-black px-8 pt-3 mt-7'>
        <h1 className='text-[24px]'>{companyTitle}</h1>
        <p className='font-semibold text-center'>Tasks completed:{tasksNumber}</p>
        <div className='flex justify-center'>
            <p>skills {skills} | </p>
            <div> ★ {companyRatio}/5</div>
        </div>
    </div>
</div>
  )
}

export default companyCard