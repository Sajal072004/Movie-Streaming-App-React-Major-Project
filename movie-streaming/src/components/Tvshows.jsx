import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "../utils/axios";
import { useEffect } from 'react';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
import Cards from './partials/Cards';
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {

  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page , setpage] = useState(1);
  const [hasmore , sethasmore] = useState(true);

  document.title = ` Movie Web | Tv | ${category}`;


  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}?language=en-US`);

      console.log(data);

      if(data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results ]);
        setpage(page+1);
      }
      else {
          sethasmore(false);
      }
      // settrending(data.results);
      

    }
    catch (error) {
      console.log("Error :", error);
    }
  }

  console.log(tv);

  const refreshhandler = () => {
    if(tv.length === 0){
      GetTv();
    }
    else {
      setpage(1);
      settv([]);
      GetTv();
    }

    }
  

  useEffect(() => {
    refreshhandler();
  }, [category]);



  return tv.length > 0 ? (
    <div className=' w-screen h-screen'>

      <div className='px-[5%] w-full flex items-center justify-between'>

        <h1 className=' text-2xl text-zinc-400 font-semibold'><i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i> Tv</h1>


        <div className='flex items-center w-[80%]'>

          <Topnav></Topnav>
          <Dropdown
            title="Category"
            options={["popular" , "top_rated" , "on_the_air" , "airing_today"]}
            func={setcategory}
          />

          <div className='w-[2%]'></div>

          

        </div>



      </div>

      <InfiniteScroll
          dataLength={tv.length}
          next={GetTv}
          hasMore={hasmore}
          loader={ <h1>Loading....</h1>}
      >

        <Cards data={tv} title="tv" />

      </InfiniteScroll>




    </div>
  ) : <Loading />
}

export default Tvshows;