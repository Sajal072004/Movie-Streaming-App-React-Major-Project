import React from 'react';
import notFound from '/404.jpg';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
    <div className="w-screen h-screen absolute top-0 flex justify-center items-center bg-black">
      <img className='h-screen w-screen' src={notFound} alt="" />
    </div>

    </div>
    

  )
}

export default Notfound;