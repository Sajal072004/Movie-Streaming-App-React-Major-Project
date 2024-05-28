import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from '../store/actions/personActions';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { useNavigate, useParams } from "react-router-dom";
import Loading from './Loading';
import { useState } from 'react';
import Dropdown from "./partials/Dropdown";

import HorizontalCards from "./partials/HorizontalCards"

const PersonDetails = () => {

  const [category, setCategory] = useState("movie");

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.person)

  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    }
  }, [id]);


  return info ? (
    <div className='px-[15%] bg-[#1F1E24] h-[220vh] w-screen flex flex-col '>

      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-5 text-2xl '>

        <Link onClick={() => navigate(-1)} className="hover:text-[#f6ff00] ri-arrow-left-line"></Link>

        <Link to="/" className="hover:text-[#f6ff00] ri-home-4-fill"></Link>

        {/* <a target='_blank' href={info.detail.homepage}>
          <i class="ri-external-link-fill"></i>
        </a>

        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <i class="ri-earth-fill"></i>
        </a>

        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a> */}



      </nav>

      <div className='w-full flex '>
        <div className='w-[20%] '>

          <img className='h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgb(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />

          <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500 w-[85%] ' />

          <div className='text-2xl text-white flex gap-x-5 '>

            <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
              <i class="ri-earth-fill"></i>
            </a>

            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
              <i class="ri-facebook-circle-fill"></i>
            </a>

            <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
              <i class="ri-instagram-line"></i>
            </a>

            <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* personal information */}

          <h1 className='text-2xl text-zinc-400 font-semibold my-3'>
            Personal Info
          </h1>

          <h1 className=' text-zinc-400 font-semibold '>
            Known for
          </h1>

          <h1 className=' text-zinc-400 '>
            {info.detail.known_for_department}
          </h1>

          <h1 className=' text-zinc-400 font-semibold mt-3 '>
            Gender
          </h1>

          <h1 className=' text-zinc-400 '>
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className=' text-zinc-400 font-semibold mt-3 '>
            Birthday
          </h1>

          <h1 className=' text-zinc-400 '>
            {info.detail.birthday}
          </h1>

          <h1 className=' text-zinc-400 font-semibold mt-3 '>
            Place of Birth
          </h1>

          <h1 className=' text-zinc-400 '>
            {info.detail.place_of_birth}
          </h1>


        </div>


        {/* details and information */}

        <div className='w-[80%] ml-[5%] '>

          <h1 className='text-6xl text-zinc-400 font-black my-3'>
            {info.detail.name}
          </h1>

          <h1 className=' text-zinc-400 font-semibold text-xl '>
            Biography
          </h1>
          <p className='text-zinc-400 mt-3'> {info.detail.biography}</p>

          <h1 className='mt-5 text-lg text-zinc-400 font-semibold '>
            Known For
          </h1>

          <HorizontalCards data={info.combinedCredits.cast} />
          <br />

          <div className='w-full flex justify-between '>
            <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>Acting
            </h1>

            <Dropdown title="Category" options={["tv", "movie"]} func={setCategory} />



          </div>

          <div className='w-full h-[50vh] list-disc text-zinc-400  overflow-x-hidden overflow-y-auto border-2  border-zinc-700 m-5 p-5'>

            {
              info[category + "Credits"].cast.map((c, i) => (
                <li className='hover:text-white duration-300 cursor-pointer p-5'>
                  <Link to={`/${category}/details/${c.id}`} className=''>
                    <p className='inline'>{
                      c.name || c.title || c.original_name || c.original_title
                      }</p>
                    <p className='ml-5 mt-2'>
                      {
                        c.character && `Character Name - ${
                          c.character
                        }`
                      } </p>
                  </Link>
                </li>

              ))
            }


          </div>





        </div>
      </div>
    </div>
  ) : <Loading />
}

export default PersonDetails