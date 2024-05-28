import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";


const Home = () => {
  document.title = "Movie Web | Home";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending , setTrending] = useState(null);
  const [category , setcategory] = useState("all");



  const GetHeaderWallpaper = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day?language=en-US`);

      let randomdata = data.results[(Math.random()* data.results.length).toFixed()];
      setwallpaper(randomdata);
      
    }
    catch ( error) {
      console.log( "Error :" , error);
    }
  }

  const GetTrending = async () => {
    try {
      const {data} = await axios.get(`/trending/${category}/day?language=en-US`);
      setTrending(data.results);
      
    }
    catch ( error) {
      console.log( "Error :" , error);
    }
  }
  
  useEffect( () => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
    console.log("category :" , category);
    

  },[category]);

  
  return wallpaper && trending ?
  (
  <>
      <Sidenav></Sidenav>
      <div className="w-[80%] h-full ">
        <Topnav></Topnav>
        <Header data={wallpaper}></Header>

        <div className='mt-1 flex justify-between '>
        <h1 className='text-xl text-zinc-400 font-semibold ml-5 mt-3'>Trending</h1>

        <Dropdown title="Filter" options={["tv" , "movie" , "all"]} func = { setcategory}  ></Dropdown>
      </div>

        <HorizontalCards data={trending}  />
      </div>

  </>

) : (<Loading/>);
};

export default Home;