import React from 'react'
import loader from '/loader2.gif'

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <img className='h-[50%]' src={loader} alt="" />
    </div>

  )
}

export default Loading;