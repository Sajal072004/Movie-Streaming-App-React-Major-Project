import React from 'react'
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from "../../utils/axios";
import noimage from '/noimage.jpg';

const Topnav = () => {

  

  const [query , setQuery] = useState("");
  const [searches , setSearches] = useState([]);


  const GetSearches = async() =>{
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      
    }
    catch ( error) {
      console.log( "Error :" , error);
    }

};

useEffect(() =>{
  GetSearches();
}, [query]);

  

  return (
    <div className='w-[80%] h-[10vh] relative flex mx-auto items-center'>
      
        <i className='text-zinc-400 text-3xl ri-search-line'></i>
        <input 
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        
        className='w-[50%] mx-10 p-3 text-[15px] outline-none border-none bg-transparent text-zinc-200' type="text" placeholder='search anything' />

        {query.length > 0 && <i onClick={() => setQuery("")} className=' text-zinc-400 text-3xl ri-close-fill right-0'></i> }
        


        <div className='w-[50%] max-h-[50vh] absolute bg-zinc-200 top-[100%]  overflow-auto z-[100]'>

        {searches.map((s,i) => ( 
          <Link to={`/${s.media_type}/details/${s.id}`} key={i} className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center  border-b-2 border-zinc-100">

          <img className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg' src= {
            s.backdrop_path || s.profile_path ?
            `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}  />

          <span>{s.name || s.title || s.original_name || s.original_title}</span>

        </Link>
        ))}

          {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center  border-b-2 border-zinc-100">
            <img src="" alt="" />
            <span>Hello Everyone</span>
          </Link> */}

          
        </div>
      

    </div>
  )
}

export default Topnav;