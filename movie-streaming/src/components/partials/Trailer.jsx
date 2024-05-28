import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import Notfound from './Notfound';




const Trailer = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const category = pathname.includes("movie") ? "movie" : "tv";

  const ytvideo = useSelector((state) => state[category].info.videos);



  return ytvideo ? (
    <div className='absolute top-0 left-0 z-10 w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.9)]'>

      <Link onClick={() => navigate(-1)} className="absolute hover:text-[#f6ff00] ri-close-fill text-3xl text-white right-[5%] top-[5%] "></Link>

      <ReactPlayer
        controls
        height = {650}
        width = { 1350}

        url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />


    </div>
  ) : 
  <div>
     <Notfound/>
     <Link onClick={() => navigate(-1)} className="absolute hover:text-[#f6ff00] ri-close-fill text-3xl text-white right-[5%] top-[5%]"></Link>

     </div>
}

export default Trailer;