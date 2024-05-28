import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from '../store/actions/tvActions';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { useNavigate, useParams } from "react-router-dom";
import Loading from './Loading';

import HorizontalCards from "./partials/HorizontalCards"

const Tvdetails = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.tv)

  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removetv());
    }
  }, [id]);

  return info ? (



    <div className='overflow-x-hidden relative'>

      <div style={{
        background: `linear-gradient(rgba(0,0,0,.2) , rgba(0,0,0,.4) , rgba(0,0,0,.6)) , url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.poster_path || info.profile_path})`,

        backgroundPosition: 'center',
        backgroundSize: 'cover',


      }} className='w-[100vw] h-[200vh] px-[5%]'>

        <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-5 text-2xl '>

          <Link onClick={() => navigate(-1)} className="hover:text-[#f6ff00] ri-arrow-left-line"></Link>

          <a target='_blank' href={info.detail.homepage}>
            <i class="ri-external-link-fill"></i>
          </a>

          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
            <i class="ri-earth-fill"></i>
          </a>

          <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>

          <Link to="/" className="hover:text-[#f6ff00] ri-home-4-fill"></Link>




        </nav>

        <div className='w-full flex'>

          <img className='h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgb(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />


          <div className='content ml-[5%] text-white mt-[-30px] '>
            <h1 className='text-5xl font-black '>
              {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}

              <small className='text-2xl font-bold text-zinc-200'>( {info.detail.first_air_date.split("-")[0]} )</small>
            </h1>

            <div className='flex items-center gap-x-3 gap-y-10 font-bold mt-5 mb-5'>

              <span className=' rounded-full text-xl font-semibold text-white w-[7vh] h-[7vh] flex justify-center items-center bg-yellow-600 '> {(info.detail.vote_average * 10).toFixed()}<sup>%</sup></span>

              <h1 className=' w-[70px] font-semibold text-2xl leading-6'>User Score</h1>
              <h1> {info.detail.first_air_date} </h1>
              <h1>{info.detail.genres.map(g => g.name).join(" , ")} </h1>

              {/* <h1>{info.detail.runtime}min </h1> */}




            </div>

            <h1 className='text-2xl font-semibold italic text-zinc-100'>{info.detail.tagline} </h1>

            <h1 className='text-xl mt-5 mb-3'>Overview</h1>
            <p className='mb-10'>{info.detail.overview}</p>

            {/* <h1 className='text-xl mt-5 mb-3'>Movie Translated</h1>
          <p>{info.translations.join(", ")}</p> */}

            <Link className='mt-10 p-5 bg-[#6556CD] rounded-lg' to={`${pathname}/trailer`} > <i className='text-xl ri-play-fill'></i>  Watch Trailer</Link>

          </div>

        </div>

        <div className='w-[80%] flex flex-col gap-y-5 mt-5'>



          {info.watchproviders && info.watchproviders.flatrate &&
            <div className=' flex gap-x-10 items-center text-white'>
              <h1>Available on Platform</h1>
              {info.watchproviders.flatrate.map(w =>
                <img
                  title={w.provider_name}
                  className='w-[6vh] h-[6vh] rounded-md object-cover '

                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}


            </div>}


          {info.watchproviders && info.watchproviders.rent &&
            <div className='flex gap-x-10 items-center text-white'>
              <h1>Available on Rent____</h1>
              {info.watchproviders.rent.map(w =>
                <img
                  title={w.provider_name}
                  className='w-[6vh] h-[6vh] rounded-md object-cover '

                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}


            </div>}


          {info.watchproviders && info.watchproviders.buy &&
            <div className='flex gap-x-10 items-center text-white mb-5'>
              <h1>Available to Buy _____</h1>
              {info.watchproviders.buy.map(w =>
                <img
                  title={w.provider_name}
                  className='w-[6vh] h-[6vh] rounded-md object-cover '

                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />)}


            </div>}

          <h1 className='mt-10 text-3xl font-bold text-white'>Seasons</h1>

          <div className='w-[90vw] h-[42vh] overflow-x-hidden'>

      
      <div className='w-[100%] flex h-[39vh] overflow-y-auto mt-5 '>
        {
          info.detail.seasons.length > 0 ? info.detail.seasons.map((data, i) => (
            <Link key={i} className='min-w-[15%] h-[25vh]  mr-3 ml-2  '>
              <img
              className='w-full h-[130%] object-cover' 
              src = {`https://image.tmdb.org/t/p/original/${ data.poster_path || data.backdrop_path || data.poster_path}` }
              alt="" />
              <h1 className='text-[18px] font-black text-white text-center'>{data.name || data.title || data.original_name || data.original_title}</h1>

              {/* <p className=' text-[14px] text-white mt-3 mb-3 '>{data.overview.slice(0, 80)}....<span className='text-zinc-500'>more</span></p> */}
            </Link>
          ) ) : <h1 className='text-3xl text-white font-black text-center mt-5'> Nothing to Show</h1>
          
          }

      </div>

    </div>


          <hr className='h-[5px]' />


        </div>
        <h1 className='mt-10 text-3xl font-bold text-white'>Recommendations & Similar Stuff</h1>

        <HorizontalCards data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        } />




      </div>

      <Outlet />

    </div>
  ) : <Loading />
}

export default Tvdetails