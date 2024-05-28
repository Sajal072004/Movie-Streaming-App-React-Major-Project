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

const People = () => {

  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page , setpage] = useState(1);
  const [hasmore , sethasmore] = useState(true);

  document.title = ` Movie Web | Person | ${category}`;


  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}?language=en-US`);

      console.log(data);

      if(data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results ]);
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

  console.log(person);

  const refreshhandler = () => {
    if(person.length === 0){
      GetPerson();
    }
    else {
      setpage(1);
      setperson([]);
      GetPerson();
    }

    }
  

  useEffect(() => {
    refreshhandler();
  }, [category]);

  return person.length > 0 ? (
    <div className=' w-screen h-screen'>

      <div className='px-[5%] w-full flex items-center justify-between'>

        <h1 className=' text-2xl text-zinc-400 font-semibold'><i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i> Person</h1>


        <div className='flex items-center w-[80%]'>

          <Topnav></Topnav>
          

          <div className='w-[2%]'></div>

          

        </div>



      </div>

      <InfiniteScroll
          dataLength={person.length}
          next={GetPerson}
          hasMore={hasmore}
          loader={ <h1>Loading....</h1>}
      >

        <Cards data={person} title="person" />

      </InfiniteScroll>




    </div>
  ) : <Loading />
}

export default People