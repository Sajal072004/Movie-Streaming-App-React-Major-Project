import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const Sidenav = () => {

  

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-7">

      <h1 className='text-[21px] text-white font-bold '>
        <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
        <span>Movie-Stream</span>
      </h1>

      <nav className='flex flex-col text-zinc-400 text-[12px] '>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds

        </h1>

        <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4 text-[17px]'> <i className=" mr-2 ri-fire-fill"></i>Trending</Link>

        <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4 text-[17px]'> <i className="mr-2 ri-bard-fill"></i>Popular</Link>

        <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4 text-[17px]'><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
        
        <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4 text-[17px]'><i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
        <Link to="/people" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4 mb-2 text-[17px]'><i className="mr-2 ri-team-fill"></i>People</Link>

      </nav>

      <hr className='border-none h-[1px] bg-zinc-400' />

      <nav className='flex flex-col text-zinc-400 text-xl '>

        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information

        </h1>

        <a href="https://sajalnamdeo.netlify.app/" target='_blank' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4 text-[17px]'> <i className="mr-2 ri-information-2-fill"></i>About Me</a>
      </nav>



    </div>
  )
}

export default Sidenav;