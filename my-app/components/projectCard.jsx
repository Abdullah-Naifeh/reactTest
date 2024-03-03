import React from 'react'
import Link from 'next/link'
import userImage from "@/images/userImage.png";
import Image from 'next/image';

function projectCard() {
  return (
    <div className='flex flex-col border border-[#4E91CD] py-6 px-8 max-w-[520px] rounded'>
        <div className='flex justify-between items-center'>
            <h1 className='text-[#4E91CD] text-xl font-bold '>Project Name</h1>
            <button type="submit" className='py-[9px] px-[13px] bg-[#4E91CD] text-[14px] rounded text-[#ffffff]'>Design & Creative</button>
        </div>
        <div className='mt-4'>
            <p className='text-[12px] mb-12'>I need a graphic designer for designing a book cover I need a graphic designer for designing a book cover I need a graphic designer for designing a book</p>
            <Link href='#' className='text-[#4E91CD] text-[12px] font-bold'>Required Skills</Link>
        </div>
        <div className='border-y pt-3 pb-4'>
            <button type='submit' className='py-[9px] px-[13px] mr-4 bg-[#67DDB9] rounded-full text-[10px] text-[#0C133D]'>Graphic Design</button>
            <button type='submit' className='py-[9px] px-[13px] mr-4 bg-[#67DDB9] rounded-full text-[10px] text-[#0C133D]'>App Design</button>
            <button type='submit' className='py-[9px] px-[13px] bg-[#67DDB9] rounded-full text-[10px] text-[#0C133D]'>Adobe illustrator</button>
        </div>
        <div className='flex justify-between mt-4'>
            <div className="flex">
                <div>
                <Image
                    src={userImage}
                    width={40}
                    height={40}
                    alt="person vector"
                />
                </div>
                <div className="flex flex-col mt-1 ml-2">
                <p className="text-[13px] text-[#0c133d] font-bold">
                    Randy lahey
                </p>
                <p className="text-[10px] text-[#0c133d]">
                    Top Rated
                </p>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <span className="text-[8px] text-[#8FC1E8]">244</span>
                <span className="text-[8px] text-[#8FC1E8]">Jop Requested</span>
            </div>
        </div>    
    </div>
  )
}

export default projectCard