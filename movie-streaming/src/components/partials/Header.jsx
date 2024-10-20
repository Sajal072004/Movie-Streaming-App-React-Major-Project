import React from 'react';

import { Link } from 'react-router-dom';


const Header = ({data}) => {
  

  return <>
    <div 
      style={{
        background: `linear-gradient(rgba(0,0,0,.2) , rgba(0,0,0,.4) , rgba(0,0,0,.6)) , url(https://image.tmdb.org/t/p/original/${ data.poster_path || data.backdrop_path || data.profile_path})`,
        backgroundPosition: 'center',
        backgroundSize: '700px 1000px',
        
        
        
        
        
      }}
    className='w-full h-[40vh] flex flex-col justify-end p-[5%] items-start overflow-hidden'>
      
      <h1 className='w-[80%] text-4xl font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>

      <p className='w-[50%] text-white mt-3 '>{data.overview}....<Link to={`/${data.media_type}/details/${data.id}`}   className='text-blue-400'>more</Link></p>

      <p className='text-white '>
      <i className="ri-megaphone-fill text-yellow-500"></i>{data.release_date || "No information"}
      <i className=" ml-5 ri-album-fill text-yellow-500"></i>{data.media_type.toUpperCase()}
      </p>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='p-4 rounded bg-[#6556CD] text-white  mt-5 '>Watch Trailer</Link>

      
      
      </div>
    </>
}

export default Header;