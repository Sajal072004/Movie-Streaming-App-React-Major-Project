import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "../utils/axios";
import { useEffect } from 'react';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
import Cards from './partials/Cards';
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page , setpage] = useState(1);
  const [hasmore , sethasmore] = useState(true);

  document.title = ` Movie Web | Popular | ${category.toUpperCase()}`;


  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}?language=en-US`);

      console.log(data);

      if(data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results ]);
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

  console.log(popular);

  const refreshhandler = () => {
    if(popular.length === 0){
      GetPopular();
    }
    else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }

    }
  

  useEffect(() => {
    refreshhandler();
  }, [category]);



  return popular.length > 0 ? (
    <div className=' w-screen h-screen'>

      <div className='px-[5%] w-full flex items-center justify-between'>

        <h1 className=' text-2xl text-zinc-400 font-semibold'><i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i> Popular</h1>


        <div className='flex items-center w-[80%]'>

          <Topnav></Topnav>
          <Dropdown
            title="Category"
            options={["movie", "tv"]}
            func={setcategory}
          />

          <div className='w-[2%]'></div>

          

        </div>



      </div>

      <InfiniteScroll
          dataLength={popular.length}
          next={GetPopular}
          hasMore={hasmore}
          loader={ <h1>Loading....</h1>}
      >

        <Cards data={popular} title={category} />

      </InfiniteScroll>




    </div>
  ) : <Loading />
}

export default Popular;