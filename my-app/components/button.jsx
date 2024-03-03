import React from 'react'

function button({text, className,}) {
  return (
    <div className={`${className} border rounded-full border-[#4E91CD] overflow-hidden`}>
        <button type="submit" className={` py-3 px-6`}>{text}</button>
    </div>
  )
}

export default button