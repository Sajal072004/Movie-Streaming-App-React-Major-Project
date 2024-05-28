import React from 'react';
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';



const HorizontalCards = ({ data }) => {
  return (

    <div className='w-full h-[42vh] overflow-x-hidden'>

      
      <div className='w-[100%] flex h-[39vh] overflow-y-auto mt-5 '>
        {
          data.length >0 ? data.map((data, i) => (
            <Link to={`/${data.media_type}/details/${data.id}`} key={i} className='min-w-[15%] h-[22vh]  mr-3 ml-2 '>
              <img
              className='w-full h-[130%] object-cover' 
              src = {`https://image.tmdb.org/t/p/original/${ data.poster_path || data.backdrop_path || data.poster_path || noimage}` }
              alt="" />
              <h1 className='text-[18px] font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>

              {/* <p className=' text-[14px] text-white mt-3 mb-3 '>{data.overview.slice(0, 80)}....<span className='text-zinc-500'>more</span></p> */}
            </Link>
          ) )
          : <h1 className='text-3xl text-white font-black text-center mt-5'> Nothing to Show</h1>
          }

      </div>

    </div>
  )
}

export default HorizontalCards;