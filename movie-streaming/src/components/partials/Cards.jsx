import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';

const Cards = ({data , title}) => {
  return (
    <div className='flex flex-wrap h-[full] w-[full] bg-[#1f1e24]'>
      {data.map( (c,i) => 
        <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[25vh] m-[2.5%] mb-[5%]' key={i}>
          <img className='h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgb(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${ c.poster_path || c.backdrop_path || c.profile_path || noimage}`} alt="" />

          <h1 className='text-2xl text-zinc-400 mt-3 font-semibold mb-1'>
          {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && 
          <div className='absolute right-[-10%] bottom-[30%] rounded-full text-xl font-semibold text-white w-[7vh] h-[7vh] flex justify-center items-center bg-yellow-600 '> {(c.vote_average * 10).toFixed()}<sup>%</sup> </div> }
        </Link>

      )}
    </div>
  )
};

export default Cards;